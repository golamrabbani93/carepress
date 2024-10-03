/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import {useEffect, useState} from 'react';
import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import EditorMenuBar from './EditorMenuBar';
import './Editor.css';
import {Check, X} from 'lucide-react';
import {useUser} from '@/context/user.provider';
import {useCreatePost, useUpdatePost} from '@/hooks/post.hook';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
import {PostModalProps} from '../modal/DeletePostModal';

interface PostData {
	title: string;
	content: string;
	category: string;
	images: File[]; // Change image to images
}

const UpdateEditor = ({onClose, post, setShowOptions}: PostModalProps & {onClose: () => void}) => {
	const {user} = useUser();
	const [imagePreviews, setImagePreviews] = useState<string[]>([]);
	const [imageFiles, setImageFiles] = useState<File[] | []>([]);
	const {mutate: updatePost, isPending, data} = useUpdatePost();
	console.log('🚀🚀: UpdateEditor -> data', data);
	const [postData, setPostData] = useState<PostData>({
		title: '',
		content: '',
		category: '',
		images: [], // Initialize as an empty array
	});

	const editor = useEditor({
		extensions: [
			StarterKit,
			TextAlign.configure({types: ['heading', 'paragraph']}),
			Highlight,
			Image.configure({
				inline: true,
				allowBase64: true,
			}),
		],
		content: post.content,
		onUpdate: ({editor}) => {
			setPostData((prev) => ({...prev, content: editor.getHTML()}));
		},
	});

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files ? Array.from(e.target.files) : [];

		if (files.length > 0) {
			// Update the post data with the selected images
			setPostData((prev) => ({
				...prev,
				images: [...prev.images, ...files], // Append new images
			}));
			setImageFiles((prev) => [...prev, ...files]); // Append new files

			// Generate previews for each selected image
			const newPreviews: string[] = [];

			files.forEach((file) => {
				const reader = new FileReader();

				reader.onloadend = () => {
					setImagePreviews((prevPreviews) => [...prevPreviews, reader.result as string]);
				};
				reader.readAsDataURL(file);
			});
		}
	};
	const handleImageRemove = (index: number) => {
		//* Remove the image at the specified index
		setPostData((prev) => {
			const updatedImages = prev.images.filter((_, i) => i !== index); // Filter out the image

			return {...prev, images: updatedImages}; // Update state
		});

		//* Remove the preview of the removed image
		setImagePreviews((prev) => prev.filter((_, i) => i !== index));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const UpdatedPostData = {
			author: user?._id,
			title: postData.title,
			content: postData.content,
			category: postData.category,
		};

		const formData = new FormData();

		formData.append('data', JSON.stringify(UpdatedPostData));
		// Append all selected images to the form data

		if (typeof postData.images[0] === 'string') {
			postData.images = [];
		}
		for (let image of imageFiles) {
			formData.append('images', image);
		}

		const updateData = {
			postId: post._id as string,
			postData: formData,
		};

		updatePost(updateData);
	};

	useEffect(() => {
		if (data && data.success) {
			setShowOptions(false);
		}
		setPostData({
			title: post.title,
			content: post.content,
			category: post.category,
			images: post.images as unknown as File[], // Initialize images with the post images
		});
		setImagePreviews(post.images);
	}, [data, post]);

	return (
		<div className="w-full mx-auto p-4 bg-white rounded-lg">
			<form onSubmit={handleSubmit}>
				{/* Title Field */}
				<div className="mb-4">
					<label className="block text-gray-700" htmlFor="title">
						Title:
					</label>
					<input
						required
						className="w-full px-3 py-2 border rounded-lg"
						id="title"
						placeholder="Enter title"
						type="text"
						value={postData.title}
						onChange={(e) => setPostData((prev) => ({...prev, title: e.target.value}))}
					/>
				</div>

				{/* Category Dropdown */}
				<div className="mb-4">
					<label className="block text-gray-700" htmlFor="category">
						Category:
					</label>
					<select
						required
						className="w-full px-3 py-2 border rounded-lg"
						id="category"
						value={postData.category}
						onChange={(e) => setPostData((prev) => ({...prev, category: e.target.value}))}
					>
						<option value="">Select a category</option>
						<option value="Tip">Tip</option>
						<option value="Story">Story</option>
					</select>
				</div>

				{/* Image Upload */}
				<div className="mb-4">
					<label className="block text-gray-700" htmlFor="image-upload">
						Image:
					</label>
					<input
						multiple
						accept="image/*"
						disabled={imagePreviews.length >= 3}
						id="image-upload"
						type="file"
						onChange={handleImageUpload}
					/>
				</div>

				{/* Image Preview */}
				{imagePreviews.length > 0 && (
					<div className="mt-4">
						<h3 className="text-sm text-gray-700">Image Preview:</h3>
						<div className="grid grid-cols-3 gap-2 mt-2">
							{imagePreviews.map((preview, index) => (
								<div key={index} className="relative">
									<img
										alt={`Preview ${index + 1}`}
										className="rounded-lg max-w-full h-[100px] object-cover"
										src={preview}
									/>
									<div className="absolute top-1 left-1">
										<X
											className="bg-primary text-white rounded-full w-5 h-5 cursor-pointer"
											onClick={() => handleImageRemove(index)}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Rich Text Editor */}
				<div className="mb-4">
					<label className="block text-gray-700" htmlFor="content">
						Content:
					</label>
					<div className="mb-3">
						<EditorMenuBar editor={editor} />
					</div>
					<div>
						<EditorContent editor={editor} />
					</div>
				</div>

				{/* Submit Button */}
				<div className="flex justify-end">
					{isPending ? (
						<Button color="primary" type="submit" variant="bordered">
							<Spinner size="sm" color="primary" />
						</Button>
					) : (
						<Button color="primary" endContent={<Check />} type="submit" variant="bordered">
							Post
						</Button>
					)}
				</div>
			</form>
		</div>
	);
};

export default UpdateEditor;
