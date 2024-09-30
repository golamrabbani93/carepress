const SidebarTitle = ({title}: {title: string}) => {
	return (
		<div className="flex items-center mb-2">
			<h1
				className="relative w-2 h-[30px] before:absolute before:left-0 before:w-[2px] before:h-full before:bg-primary before:content-['']"
				aria-hidden="true"
			/>
			<h2 className="ml-2 text-3xl font-bold text-primary uppercase">{title}</h2>
		</div>
	);
};

export default SidebarTitle;
