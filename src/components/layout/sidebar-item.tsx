import Link from "next/link";

interface SidebarItemProps {
    href: string;
    icon: string;
    label: string;
    isActive?: boolean;
}

export function SidebarItem({ href, icon, label, isActive }: SidebarItemProps) {
    const baseClass = "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors";
    const activeClass = "bg-primary/10 text-primary dark:bg-primary/20";
    const inactiveClass = "hover:bg-gray-100 dark:hover:bg-gray-800 text-[#2D3748] dark:text-gray-300";

    return (
        <Link
            className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
            href={href}
        >
            <span className="material-symbols-outlined">{icon}</span>
            <p className="text-sm font-medium leading-normal">{label}</p>
        </Link>
    );
}
