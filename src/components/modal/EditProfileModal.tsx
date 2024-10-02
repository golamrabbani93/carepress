import {IUser} from '@/types';
import {Button} from '@nextui-org/button';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/modal';
import {FieldValues, FormProvider, SubmitHandler, useFieldArray, useForm} from 'react-hook-form';
import {Divider} from '@nextui-org/divider';
import {ChangeEvent, useEffect, useState} from 'react';
import CPInput from '../form/CPInput';
import CPForm from '../form/CPForm';
import {zodResolver} from '@hookform/resolvers/zod';
import {UserUpadteSchema} from '@/schemas/user.schema';
import {useUserUpdate} from '@/hooks/user.hook';
import {Spinner} from '@nextui-org/spinner';

export default function ProfileEditModal({user}: {user: IUser}) {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const {mutate: updateUserHandle, isPending, data, reset} = useUserUpdate();
	const [imageFiles, setImageFiles] = useState<File[] | []>([]);

	const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

	const handleSubmit: SubmitHandler<FieldValues> = (data) => {
		const formData = new FormData();

		formData.append('data', JSON.stringify(data));

		for (let image of imageFiles) {
			formData.append('image', image);
		}
		updateUserHandle(formData);
	};

	// *remove modal
	useEffect(() => {
		if (data?.success && !isPending) {
			onOpenChange();
			setImageFiles([]);
			reset();
		}
	}, [data, isPending]);

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files![0];

		setImageFiles((prev) => [file]);

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setImagePreviews((prev) => [reader.result as string]);
			};

			reader.readAsDataURL(file);
		}
	};
	const UserDefaultValue = {
		name: user?.name,
		email: user?.email,
	};

	return (
		<>
			<div className="flex space-x-4 items-center">
				<Button onPress={onOpen} className="bg-primary text-white font-extrabold">
					Edit profile
				</Button>
			</div>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
				<ModalContent>
					{() => (
						<>
							<ModalHeader className="flex flex-col gap-1">Update Profile</ModalHeader>
							<ModalBody>
								<CPForm
									onSubmit={handleSubmit}
									defaultValues={UserDefaultValue}
									resolver={zodResolver(UserUpadteSchema)}
								>
									<div className="min-w-fit flex-1 mb-3">
										<CPInput label="name" name="name" variant="bordered" />
									</div>
									<div className="min-w-fit flex-1">
										<CPInput label="email" name="email" variant="bordered" />
									</div>

									<div className="flex flex-wrap gap-2 py-2">
										<div className="min-w-fit flex-1">
											<label
												className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
												htmlFor="image"
											>
												Upload image
											</label>
											<input
												className="hidden"
												id="image"
												type="file"
												onChange={(e) => handleImageChange(e)}
											/>
										</div>
									</div>

									{imagePreviews.length > 0 && (
										<div className="flex gap-5 my-5 flex-wrap">
											{imagePreviews.map((imageDataUrl) => (
												<div
													key={imageDataUrl}
													className="relative size-48 rounded-xl border-2 border-dashed border-default-300 p-2 m-auto"
												>
													<img
														alt="item"
														className="h-full w-full object-cover object-center rounded-md"
														src={imageDataUrl}
													/>
												</div>
											))}
										</div>
									)}

									<Divider className="my-5" />

									<div className="flex justify-end">
										<Button type="submit" className="bg-primary text-white font-extrabold">
											{isPending ? <Spinner size="md" color="white" /> : 'Save profile'}
										</Button>
									</div>
								</CPForm>
								{/* </FormProvider> */}
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
