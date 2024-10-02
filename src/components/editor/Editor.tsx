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
import {Check} from 'lucide-react';
import {useUser} from '@/context/user.provider';
import {useCreatePost} from '@/hooks/post.hook';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
interface PostData {
	title: string;
	content: string;
	category: string;
	image: File | null;
}

const Editor = ({onClose}: {onClose: () => void}) => {
	const {user} = useUser();
	// const editorRef = useRef<HTMLDivElement>(null);
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
		image: null,
	});

	const [imagePreview, setImagePreview] = useState<string | null>(null);

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
		const file = e.target.files ? e.target.files[0] : null;

		if (file) {
			setPostData((prev) => ({...prev, image: file}));

			// Preview image
			const reader = new FileReader();

			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
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
		if (postData.image) {
			formData.append('images', postData.image);
		}
		createPost(formData, {
			onSuccess: (data) => {
				if (data?.success) {
					onClose();
					setPostData((_prev) => ({title: '', content: '', category: '', image: null}));
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
						<option value="Stor">Story</option>
					</select>
				</div>

				{/* Image Upload */}
				<div className="mb-4">
					<label className="block text-gray-700" htmlFor="image-upload">
						Image:
					</label>
					<input accept="image/*" id="image-upload" type="file" onChange={handleImageUpload} />
				</div>

				{/* Image Preview */}
				{imagePreview && (
					<div className="mt-4">
						<h3 className="text-sm text-gray-700">Image Preview:</h3>
						<img
							alt="Preview"
							className="rounded-lg max-w-full h-[100px] mt-2"
							src={imagePreview}
						/>
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
					{/* <button
						className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
						type="submit"
					>
						Post
					</button> */}
					<Button color="primary" endContent={<Check />} type="submit" variant="bordered">
						{isPending ? <Spinner color="primary" /> : 'Post'}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Editor;
