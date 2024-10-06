'use client';

import {Avatar} from '@nextui-org/avatar';
import {Crown} from 'lucide-react'; // Icon for premium badge

const PremiumAvatar = ({
	imgSrc,
	altText,
	status,
}: {
	imgSrc: string;
	altText: string;
	status: boolean;
}) => {
	return (
		<div className="relative ">
			{/* Avatar Component */}
			<Avatar
				src={imgSrc || ''}
				alt={altText}
				// className="w-full h-full rounded-full object-cover"
				radius="full"
			/>

			{/* Premium Badge */}
			{status && (
				<div className="absolute bottom-0 right-0 bg-blue-700 rounded-full p-1.5 shadow-lg">
					<Crown className="text-white" size={11} />
				</div>
			)}
		</div>
	);
};

export default PremiumAvatar;
