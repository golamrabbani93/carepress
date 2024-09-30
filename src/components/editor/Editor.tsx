'use client';
import {useState} from 'react';
import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import EditorMenuBar from './EditorMenuBar';
import './Editor.css';
import CommonButton from '../UI/Button/CommonButton';
import {Check} from 'lucide-react';
interface PostData {
	title: string;
	content: string;
	category: string;
	image: File | null;
}

const Editor = () => {
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
		const formData = new FormData();

		console.log('🚀🚀: handleSubmit -> postData', postData);
	};

	return (
		<div className="max-w-xl mx-auto p-4 bg-white rounded-lg ">
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
						<option value="pet-care">Pet Care</option>
						<option value="pet-stories">Pet Stories</option>
						<option value="adoption-tales">Adoption Tales</option>
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
					<EditorContent editor={editor} />
				</div>

				{/* Submit Button */}
				<div className="flex justify-end">
					{/* <button
						className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
						type="submit"
					>
						Post
					</button> */}
					<CommonButton text="Post" icon={<Check />} />
				</div>
			</form>
		</div>
	);
};

export default Editor;
