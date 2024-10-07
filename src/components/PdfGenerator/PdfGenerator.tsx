'use client';

import {jsPDF} from 'jspdf';
import {Download} from 'lucide-react';
import {useState} from 'react';
import {Spinner} from '@nextui-org/spinner';
import {Tooltip} from '@nextui-org/tooltip';
// Define the types for the props
interface PDFData {
	title: string;
	content: string;
	imageUrl: string; // Add imageUrl to the data
}

interface PdfGeneratorProps {
	data: PDFData;
}

const PdfGenerator: React.FC<PdfGeneratorProps> = ({data}) => {
	const [loading, setLoading] = useState(false);

	// Function to generate and download PDF
	const generatePDF = async () => {
		setLoading(true);

		try {
			// Create a new PDF document
			const doc = new jsPDF();

			// Load the image
			const img = new Image();

			img.src = data.imageUrl;
			img.onload = () => {
				// Draw the image on the PDF
				doc.addImage(img, 'JPEG', 20, 20, 160, 90); // Adjust the coordinates and size as needed

				// Draw title from props (dynamic data)
				doc.setFontSize(24);
				doc.setTextColor(0, 135, 182); // Blue color
				doc.text(data.title, 20, 130);

				// Draw content from props (dynamic data)
				doc.setFontSize(18);
				doc.setTextColor(0, 0, 0); // Black color

				// Split content into lines that fit within the page width
				const lines = doc.splitTextToSize(data.content, 180);

				doc.text(lines, 20, 150);

				// Save the PDF
				doc.save(`${data.title}.pdf`);

				setLoading(false);
			};
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<div className="flex justify-center mt-10">
			{loading ? (
				<Spinner color="primary" size="sm" />
			) : (
				<Tooltip className="capitalize" color={'primary'} content={'Download As Pdf'}>
					<Download className="cursor-pointer" onClick={generatePDF} />
				</Tooltip>
			)}
		</div>
	);
};

export default PdfGenerator;
