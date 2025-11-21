import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
            <div className="flex h-full w-full grow">
                <Sidebar />
                <main className="ml-64 flex-1 p-8">
                    <Header />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <Card className="lg:col-span-2 p-6">
                            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-tight mb-2">
                                Getting Started
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Complete these steps to get your platform up and running.
                            </p>
                            <div className="flex flex-col gap-3 mb-4">
                                <div className="flex gap-4 justify-between items-center">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                        Setup Progress
                                    </p>
                                    <span className="text-sm font-bold text-primary">75%</span>
                                </div>
                                <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-2">
                                    <div
                                        className="h-2 rounded-full bg-primary"
                                        style={{ width: "75%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center gap-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                                    <div className="flex items-center justify-center size-8 bg-green-500 text-white rounded-full">
                                        <span className="material-symbols-outlined !text-xl">
                                            check
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-green-700 dark:text-green-300 line-through">
                                        Invite your first team member
                                    </p>
                                </div>
                                {/* More checklist items... */}
                            </div>
                        </Card>
                        <Card className="p-6">
                            <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-tight mb-4">
                                Headcount Summary
                            </h2>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center size-10 rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined">groups</span>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-[#111418] dark:text-white">
                                            124
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Total Employees
                                        </p>
                                    </div>
                                </div>
                                {/* More summary items... */}
                            </div>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    );
}
