import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function AdminSetupPage() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-lg">
                <main className="w-full">
                    <div className="mt-6 text-center">
                        <h1 className="text-gray-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight">
                            Welcome! Let's Create Your Administrator Profile.
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal mt-2">
                            This will be the primary account for managing your organization.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div className="flex flex-col gap-y-2">
                            <label
                                className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300"
                                htmlFor="full-name"
                            >
                                Full Name
                            </label>
                            <Input
                                id="full-name"
                                placeholder="Enter your full name"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label
                                className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300"
                                htmlFor="work-email"
                            >
                                Work Email
                            </label>
                            <Input
                                disabled
                                id="work-email"
                                type="email"
                                defaultValue="alex.doe@company.com"
                                className="bg-gray-100 dark:bg-gray-900 cursor-not-allowed"
                            />
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label
                                className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300"
                                htmlFor="password"
                            >
                                Create Password
                            </label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    placeholder="Enter a strong password"
                                    type="password"
                                    className="pr-10"
                                />
                                <button
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                    type="button"
                                >
                                    <span
                                        className="material-symbols-outlined text-xl"
                                        data-icon="visibility_off"
                                    >
                                        visibility_off
                                    </span>
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                8+ characters, 1 uppercase, 1 number.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <div className="flex justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
                                <span>Password Strength</span>
                                <span>Strong</span>
                            </div>
                            <div className="flex gap-1 h-2 mt-1">
                                <div className="w-1/3 rounded-full bg-green-500"></div>
                                <div className="w-1/3 rounded-full bg-green-500"></div>
                                <div className="w-1/3 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <label
                                className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300"
                                htmlFor="confirm-password"
                            >
                                Confirm Password
                            </label>
                            <Input
                                id="confirm-password"
                                placeholder="Re-enter your password"
                                type="password"
                            />
                        </div>
                        <div className="rounded-lg bg-primary/10 dark:bg-primary/20 p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 dark:bg-primary/30">
                                    <span
                                        className="material-symbols-outlined text-primary dark:text-sky-300"
                                        data-icon="shield_person"
                                    >
                                        shield_person
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Your Role
                                    </p>
                                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                                        Administrator
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link href="/setup/organization" className="w-full block">
                            <Button className="w-full h-12 text-base font-semibold">
                                Create My Account
                            </Button>
                        </Link>
                    </form>
                    <footer className="mt-8 text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            By creating an account, you agree to our{" "}
                            <a className="font-medium text-primary hover:underline" href="#">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a className="font-medium text-primary hover:underline" href="#">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </footer>
                </main>
            </div>
        </div>
    );
}
