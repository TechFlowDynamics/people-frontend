import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/layout/sidebar";
import Link from "next/link";

export default function DepartmentsSetupPage() {
    return (
        <div className="flex h-screen w-full">
            <Sidebar />
            <main className="ml-64 flex-1 flex flex-col overflow-y-auto">
                <div className="flex flex-col p-8 gap-6 flex-1">
                    <header>
                        <div className="flex flex-wrap gap-2">
                            <Link
                                className="text-[#617589] dark:text-gray-400 text-base font-medium leading-normal hover:text-primary dark:hover:text-primary"
                                href="#"
                            >
                                Organization
                            </Link>
                            <span className="text-[#617589] dark:text-gray-400 text-base font-medium leading-normal">
                                /
                            </span>
                            <span className="text-[#111418] dark:text-gray-100 text-base font-medium leading-normal">
                                Departments & Roles
                            </span>
                        </div>
                        <div className="flex flex-wrap justify-between items-start gap-4 mt-4">
                            <div className="flex min-w-72 flex-col gap-2">
                                <p className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                    Departments & Roles
                                </p>
                                <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                                    Define and configure departments and job roles within the
                                    organization.
                                </p>
                            </div>
                        </div>
                    </header>
                    <div className="flex flex-1 gap-6 min-h-0">
                        <div className="w-1/3 flex flex-col bg-white dark:bg-[#15202B] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                                <h2 className="text-lg font-bold text-[#111418] dark:text-white">
                                    Departments
                                </h2>
                                <Button size="sm">Add New</Button>
                            </div>
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-11">
                                    <div className="text-[#617589] flex bg-[#f0f2f4] dark:bg-background-dark items-center justify-center pl-3 rounded-l-lg border-r-0">
                                        <span className="material-symbols-outlined text-xl">
                                            search
                                        </span>
                                    </div>
                                    <Input
                                        className="rounded-l-none border-none bg-[#f0f2f4] dark:bg-background-dark h-full"
                                        placeholder="Search departments..."
                                    />
                                </div>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                <div className="flex items-center gap-4 bg-primary/10 px-4 min-h-[72px] py-2 justify-between border-l-4 border-primary">
                                    <div className="flex items-center gap-4">
                                        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
                                            <span className="material-symbols-outlined">
                                                engineering
                                            </span>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-primary text-base font-medium leading-normal line-clamp-1">
                                                Engineering
                                            </p>
                                            <p className="text-[#617589] dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
                                                3 roles
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Other list items would go here */}
                            </div>
                        </div>
                        <div className="w-2/3 flex flex-col bg-white dark:bg-[#15202B] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#111418] dark:text-white">
                                        Engineering
                                    </h3>
                                    <p className="text-[#617589] dark:text-gray-400 mt-1">
                                        Responsible for building and maintaining our product.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="secondary" size="sm">
                                        Add New Role
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <span className="material-symbols-outlined text-xl text-[#617589]">
                                            more_horiz
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="text-xs text-[#617589] dark:text-gray-400 uppercase bg-gray-50 dark:bg-background-dark">
                                        <tr>
                                            <th className="px-6 py-3" scope="col">
                                                Role Title
                                            </th>
                                            <th className="px-6 py-3" scope="col">
                                                Role ID
                                            </th>
                                            <th className="px-6 py-3 text-right" scope="col">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white dark:bg-[#15202B] border-b dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5">
                                            <td className="px-6 py-4 font-medium text-[#111418] dark:text-white whitespace-nowrap">
                                                Software Engineer
                                            </td>
                                            <td className="px-6 py-4 text-[#617589] dark:text-gray-400">
                                                ENG-001
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <span className="material-symbols-outlined text-lg text-[#617589]">
                                                            edit
                                                        </span>
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <span className="material-symbols-outlined text-lg text-[#617589]">
                                                            delete
                                                        </span>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end">
                                <Link href="/setup/invite">
                                    <Button>Save and Continue</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
