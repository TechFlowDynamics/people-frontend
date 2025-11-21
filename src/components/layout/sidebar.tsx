import Link from "next/link";

export function Sidebar() {
    return (
        <aside className="flex h-screen min-h-[700px] flex-col justify-between bg-white dark:bg-[#182431] p-4 w-64 fixed border-r border-gray-200 dark:border-gray-700 z-10">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 px-3">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        data-alt="OrgPlatform Logo"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGZsgo_81Esu2gQHhR2fAA6DWzSs3magy9_a6fv5yAiHQDaNi-4RPXkiKmFGEVzeIekxKwt9IKGkP7X4PqJpBnD28PXekpJz5tH0hzSG-BbrDpNGQVv_btR_TWIaxAlUnpRefvmhzSzVNZRXpyap3n75RGy5GmpzwUJ8qnqqGweAcyPYOv7evE5vy39IlXiIJCWg1pO7WupZVwltlwTODYxS7GNXTVezu0Wvfc1sepny6aI_0o9n3MqYA0ztk6EpFEGLhmqhSa1Mhh")',
                        }}
                    ></div>
                    <div className="flex flex-col">
                        <h1 className="text-base font-bold text-[#111418] dark:text-white">
                            OrgPlatform
                        </h1>
                        <p className="text-sm font-normal text-[#617589] dark:text-gray-400">
                            Admin Panel
                        </p>
                    </div>
                </div>
                <nav className="flex flex-col gap-2 mt-4">
                    <Link
                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20"
                        href="/dashboard"
                    >
                        <span className="material-symbols-outlined">home</span>
                        <p className="text-sm font-medium leading-normal">Home</p>
                    </Link>
                    <Link
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#2D3748] dark:text-gray-300"
                        href="/setup/invite"
                    >
                        <span className="material-symbols-outlined">group</span>
                        <p className="text-sm font-medium leading-normal">Employees</p>
                    </Link>
                    <Link
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#2D3748] dark:text-gray-300"
                        href="/setup/departments"
                    >
                        <span className="material-symbols-outlined">corporate_fare</span>
                        <p className="text-sm font-medium leading-normal">Departments</p>
                    </Link>
                    <Link
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#2D3748] dark:text-gray-300"
                        href="#"
                    >
                        <span className="material-symbols-outlined">assessment</span>
                        <p className="text-sm font-medium leading-normal">Reports</p>
                    </Link>
                    <Link
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#2D3748] dark:text-gray-300"
                        href="#"
                    >
                        <span className="material-symbols-outlined">settings</span>
                        <p className="text-sm font-medium leading-normal">Settings</p>
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col gap-1">
                <Link
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#2D3748] dark:text-gray-300"
                    href="/admin-setup"
                >
                    <span className="material-symbols-outlined">account_circle</span>
                    <p className="text-sm font-medium leading-normal">Admin Profile</p>
                </Link>
                <Link
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#2D3748] dark:text-gray-300"
                    href="#"
                >
                    <span className="material-symbols-outlined">logout</span>
                    <p className="text-sm font-medium leading-normal">Logout</p>
                </Link>
            </div>
        </aside>
    );
}
