import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex min-w-72 flex-col gap-1">
                <p className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-tight">
                    Welcome, Admin!
                </p>
                <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                    Here's a snapshot of your organization's status.
                </p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex-1 w-full max-w-sm">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                        <div className="text-[#617589] dark:text-gray-400 flex bg-white dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg border border-gray-200 dark:border-gray-700 border-r-0">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <Input
                            className="rounded-l-none border-l-0 pl-2 h-10"
                            placeholder="Search employees, departments..."
                        />
                    </div>
                </div>
                <Button variant="secondary" size="icon" className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <span className="material-symbols-outlined">notifications</span>
                </Button>
                <Button className="h-10">
                    <span className="truncate">Add New Employee</span>
                </Button>
            </div>
        </header>
    );
}
