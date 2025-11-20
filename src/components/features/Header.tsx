import Link from 'next/link';

export function Header() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3">
            <div className="flex items-center gap-4 text-gray-800 dark:text-white">
                <div className="size-6 text-primary">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">OrgFlow</h2>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                    <Link className="text-sm font-medium leading-normal text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Help</Link>
                    <Link className="text-sm font-medium leading-normal text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary" href="#">Support</Link>
                </div>
            </div>
        </header>
    );
}
