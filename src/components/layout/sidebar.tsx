"use client";

import { usePathname } from "next/navigation";
import { NAV_ITEMS, BOTTOM_NAV_ITEMS } from "@/config/navigation";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
    const pathname = usePathname();

    const isLinkActive = (href: string) => {
        return pathname === href || (href !== "/dashboard" && pathname?.startsWith(href));
    };

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
                    {NAV_ITEMS.map((item) => (
                        <SidebarItem
                            key={item.href}
                            {...item}
                            isActive={isLinkActive(item.href)}
                        />
                    ))}
                </nav>
            </div>
            <div className="flex flex-col gap-1">
                {BOTTOM_NAV_ITEMS.map((item) => (
                    <SidebarItem
                        key={item.href}
                        {...item}
                        isActive={isLinkActive(item.href)}
                    />
                ))}
            </div>
        </aside>
    );
}

