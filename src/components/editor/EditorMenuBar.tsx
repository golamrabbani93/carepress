import {
	Bold,
	Italic,
	Strikethrough,
	Highlighter,
	AlignLeft,
	AlignCenter,
	AlignRight,
	AlignJustify,
	Heading1,
	Heading2,
	Heading3,
} from 'lucide-react';

const EditorMenuBar = ({editor}: {editor: any}) => {
	if (!editor) {
		return null;
	}

	return (
		<div className="control-group ">
			<div className="button-group flex space-x-1 sm:space-x-2 ">
				<button
					className={`${editor.isActive('heading', {level: 1}) ? 'is-active' : ''}`}
					type="button"
					onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
				>
					<Heading1 size={20} />
				</button>
				<button
					className={editor.isActive('heading', {level: 2}) ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
				>
					<Heading2 size={20} />
				</button>
				<button
					className={editor.isActive('heading', {level: 3}) ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
				>
					<Heading3 size={20} />
				</button>
				<button
					className={editor.isActive('paragraph') ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().setParagraph().run()}
				>
					<p>¶</p>
				</button>
				<button
					className={editor.isActive('bold') ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().toggleBold().run()}
				>
					<Bold size={20} />
				</button>
				<button
					className={editor.isActive('italic') ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().toggleItalic().run()}
				>
					<Italic size={20} />
				</button>
				<button
					className={editor.isActive('strike') ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().toggleStrike().run()}
				>
					<Strikethrough size={20} />
				</button>
				<button
					className={editor.isActive('highlight') ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().toggleHighlight().run()}
				>
					<Highlighter size={20} />
				</button>
				<button
					className={editor.isActive({textAlign: 'left'}) ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().setTextAlign('left').run()}
				>
					<AlignLeft size={20} />
				</button>
				<button
					className={editor.isActive({textAlign: 'center'}) ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().setTextAlign('center').run()}
				>
					<AlignCenter size={20} />
				</button>
				<button
					className={editor.isActive({textAlign: 'right'}) ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().setTextAlign('right').run()}
				>
					<AlignRight size={20} />
				</button>
				<button
					className={editor.isActive({textAlign: 'justify'}) ? 'is-active' : ''}
					type="button"
					onClick={() => editor.chain().focus().setTextAlign('justify').run()}
				>
					<AlignJustify size={20} />
				</button>
			</div>
		</div>
	);
};

export default EditorMenuBar;
