import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function InviteUsersPage() {
    return (
        <>
            <div className="flex flex-col gap-3 p-4 text-center mt-8">
                <h1 className="text-charcoal dark:text-charcoal-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                    Add Your Employees
                </h1>
                <p className="text-light-gray dark:text-light-gray-dark text-base font-normal leading-normal">
                    Choose a method to add people to your organization.
                </p>
            </div>
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-3xl">mail</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-charcoal dark:text-charcoal-dark text-base font-bold leading-tight">
                                Invite by Email
                            </p>
                            <p className="text-light-gray dark:text-light-gray-dark text-sm font-normal leading-normal">
                                Send an invitation link directly to your new employees' inboxes.
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <Input placeholder="Enter one or more email addresses" type="email" />
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-medium px-2.5 py-1 rounded-full">
                                elara.vance@acme.co
                                <button className="text-primary/70 hover:text-primary">
                                    <span className="material-symbols-outlined !text-base">
                                        close
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                    <Button className="w-full mt-2">Send Invites</Button>
                </div>
                <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-3xl">
                                upload_file
                            </span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-charcoal dark:text-charcoal-dark text-base font-bold leading-tight">
                                Import from a File
                            </p>
                            <p className="text-light-gray dark:text-light-gray-dark text-sm font-normal leading-normal">
                                Bulk-upload your entire team's data using a CSV or Excel file.
                            </p>
                        </div>
                    </div>
                    <div className="w-full mt-4">
                        <div className="flex items-center justify-center w-full">
                            <label
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 dark:border-slate-600 border-dashed rounded-lg cursor-pointer bg-slate-50 dark:hover:bg-gray-800 dark:bg-slate-700 hover:bg-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-600"
                                htmlFor="dropzone-file"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <span className="material-symbols-outlined text-3xl text-slate-500 dark:text-slate-400">
                                        cloud_upload
                                    </span>
                                    <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                                        <span className="font-semibold">Click to upload</span> or
                                        drag and drop
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        CSV, XLSX (MAX. 5MB)
                                    </p>
                                </div>
                                <input className="hidden" id="dropzone-file" type="file" />
                            </label>
                        </div>
                        <p className="text-sm text-light-gray dark:text-light-gray-dark mt-2">
                            <a className="text-primary hover:underline font-medium" href="#">
                                Download our template
                            </a>{" "}
                            to get started.
                        </p>
                    </div>
                    <Button className="w-full mt-auto">Start Import</Button>
                </div>
            </div>
            <div className="flex px-4 py-3 justify-center">
                <Link href="/dashboard">
                    <Button variant="ghost">I'll do this later</Button>
                </Link>
            </div>
        </>
    );
}
