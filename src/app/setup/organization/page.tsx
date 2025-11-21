import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import Link from "next/link";

export default function OrganizationSetupPage() {
    return (
        <>
            <div className="text-center mb-8 mt-16 sm:mt-20">
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-text-light dark:text-text-dark">
                    Set Up Your Organization
                </h1>
                <p className="mt-2 text-base text-text-placeholder-light dark:text-text-placeholder-dark">
                    Provide some basic information about your company to get started.
                </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-sm">
                <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 px-6 py-10">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <span className="material-symbols-outlined text-4xl text-text-placeholder-light dark:text-text-placeholder-dark">
                                cloud_upload
                            </span>
                            <p className="text-lg font-bold tracking-tight text-text-light dark:text-text-dark">
                                Upload Company Logo
                            </p>
                            <p className="text-sm text-text-placeholder-light dark:text-text-placeholder-dark">
                                Drag & drop or click to upload. PNG, JPG up to 5MB.
                            </p>
                        </div>
                        <Button variant="secondary">Choose File</Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:col-span-2">
                            <label className="flex flex-col">
                                <p className="text-sm font-medium pb-2">Company Name*</p>
                                <Input placeholder="Enter your company's name" type="text" />
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col">
                                <p className="text-sm font-medium pb-2">Company Website</p>
                                <Input placeholder="https://www.example.com" type="url" />
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col">
                                <p className="text-sm font-medium pb-2">Industry*</p>
                                <Select>
                                    <option>Select an industry</option>
                                    <option>Technology</option>
                                    <option>Healthcare</option>
                                    <option>Finance</option>
                                    <option>Retail</option>
                                </Select>
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col">
                                <p className="text-sm font-medium pb-2">Company Size</p>
                                <Select>
                                    <option>Select size</option>
                                    <option>1-10 employees</option>
                                    <option>11-50 employees</option>
                                    <option>51-200 employees</option>
                                    <option>201-500 employees</option>
                                    <option>500+ employees</option>
                                </Select>
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col">
                                <p className="text-sm font-medium pb-2">Country/Region</p>
                                <Select>
                                    <option>Select country</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>United Kingdom</option>
                                    <option>Australia</option>
                                </Select>
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="flex flex-col">
                                <p className="text-sm font-medium pb-2">
                                    Brief Company Description
                                </p>
                                <textarea
                                    className="form-textarea w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 text-sm placeholder:text-text-placeholder-light dark:placeholder:text-text-placeholder-dark focus:border-primary focus:ring-primary"
                                    placeholder="Describe what your company does..."
                                    rows={4}
                                ></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <Button variant="ghost">Skip</Button>
                        <Link href="/setup/departments">
                            <Button>Save and Continue</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
