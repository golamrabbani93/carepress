/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import {useEffect, useRef, useState} from 'react';
import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import EditorMenuBar from './EditorMenuBar';
import './Editor.css';
import {Check, X} from 'lucide-react';
import {useUser} from '@/context/user.provider';
import {useCreatePost} from '@/hooks/post.hook';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
interface PostData {
	title: string;
	content: string;
	category: string;
	images: File[]; // Change image to images
}

const Editor = ({onClose}: {onClose: () => void}) => {
	const {user} = useUser();

	// const proseMirror = editorRef.current?.children[0]?.childNodes[0] as unknown as HTMLDivElement;
	// console.log('🚀🚀: Editor -> proseMirror', proseMirror);

	// useEffect(() => {
	// 	const adjustHeight = () => {
	// 		// Access the ProseMirror element
	// 		const proseMirror = editorRef.current?.children[0]?.childNodes[0] as HTMLDivElement;

	// 		// Check if the ProseMirror element exists
	// 		if (proseMirror) {
	// 			// Get the scrollHeight of the ProseMirror element
	// 			const scrollHeight = proseMirror.scrollHeight;
	// 			console.log('🚀🚀: adjustHeight -> scrollHeight', scrollHeight);

	// 			// Adjust the height based on the scrollHeight
	// 			if (scrollHeight > 100) {
	// 				proseMirror.style.height = 'auto'; // Set height to auto
	// 			} else {
	// 				proseMirror.style.height = '100px';
	// 			}
	// 		}
	// 	};

	// 	// Initial height adjustment on mount
	// 	adjustHeight();

	// 	// Optional: Add a mutation observer to watch for changes in the ProseMirror content
	// 	const observer = new MutationObserver(adjustHeight);

	// 	// Observe changes on the ProseMirror element
	// 	const proseMirror = editorRef.current?.children[0]?.childNodes[0] as HTMLDivElement;

	// 	if (proseMirror) {
	// 		observer.observe(proseMirror, {
	// 			childList: true,
	// 			subtree: true,
	// 		});
	// 	}

	// 	// Cleanup observer on unmount
	// 	return () => {
	// 		observer.disconnect();
	// 	};
	// }, [proseMirror]);
	const {mutate: createPost, isPending} = useCreatePost();
	const [postData, setPostData] = useState<PostData>({
		title: '',
		content: '',
		category: '',
		images: [],
	});

	const [imagePreviews, setImagePreviews] = useState<string[]>([]);
	const [imageFiles, setImageFiles] = useState<File[] | []>([]);

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
		content: '',
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
		for (let image of imageFiles) {
			formData.append('images', image);
		}
		createPost(formData, {
			onSuccess: (data) => {
				if (data?.success) {
					onClose();
					setPostData((_prev) => ({title: '', content: '', category: '', images: []}));
				}
			},
		});
	};

	return (
		<div className="w-full mx-auto p-4 bg-white rounded-lg ">
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
				<div className="flex flex-wrap gap-2 py-2">
					<div className="min-w-fit flex-1">
						<label
							className={`flex h-14 w-full cursor-pointer items-center justify-center border rounded-lg  shadow-sm transition-all duration-100 hover:border-default-40 ${imagePreviews.length >= 3 && 'cursor-not-allowed bg-red-500 text-white'}`}
							htmlFor="image"
						>
							{imagePreviews.length >= 3 ? 'Max 3 images allowed' : 'Upload image'}
						</label>
						<input
							multiple
							className="hidden"
							disabled={imagePreviews.length >= 3}
							id="image"
							type="file"
							onChange={handleImageUpload}
						/>
					</div>
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

export default Editor;
