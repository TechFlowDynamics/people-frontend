"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const steps = [
        {
            name: "Organization",
            path: "/setup/organization",
            icon: "corporate_fare",
        },
        {
            name: "Invite Users",
            path: "/setup/invite",
            icon: "group_add",
        },
        {
            name: "Finalize",
            path: "/setup/finalize",
            icon: "check_circle",
        },
    ];

    // Helper to determine step status
    const getStepStatus = (stepPath: string, index: number) => {
        const currentStepIndex = steps.findIndex((s) => pathname.includes(s.path));
        if (index < currentStepIndex) return "completed";
        if (index === currentStepIndex) return "current";
        return "upcoming";
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-3xl">
                <div className="mb-10 w-full">
                    <nav aria-label="Progress">
                        <ol className="flex items-center" role="list">
                            {steps.map((step, index) => {
                                const status = getStepStatus(step.path, index);
                                const isLast = index === steps.length - 1;

                                return (
                                    <li
                                        key={step.name}
                                        className={cn(
                                            "relative flex-1",
                                            !isLast && "pr-8 sm:pr-20"
                                        )}
                                    >
                                        {!isLast && (
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-0 flex items-center"
                                            >
                                                <div
                                                    className={cn(
                                                        "h-0.5 w-full",
                                                        status === "completed"
                                                            ? "bg-primary"
                                                            : "bg-gray-200 dark:bg-gray-700"
                                                    )}
                                                ></div>
                                            </div>
                                        )}
                                        <Link
                                            href={step.path}
                                            className={cn(
                                                "relative flex h-8 w-8 items-center justify-center rounded-full border-2",
                                                status === "completed" || status === "current"
                                                    ? "border-primary bg-primary text-white"
                                                    : "border-gray-300 bg-background-light dark:border-gray-600 dark:bg-background-dark"
                                            )}
                                        >
                                            {status === "completed" || status === "current" ? (
                                                <span className="material-symbols-outlined filled text-lg">
                                                    {step.icon}
                                                </span>
                                            ) : (
                                                <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-400"></span>
                                            )}
                                        </Link>
                                        <div className="absolute -bottom-7 w-max text-center sm:-bottom-8 left-1/2 -translate-x-1/2">
                                            <span
                                                className={cn(
                                                    "text-xs font-bold sm:text-sm",
                                                    status === "current"
                                                        ? "text-primary"
                                                        : "text-text-placeholder-light dark:text-text-placeholder-dark"
                                                )}
                                            >
                                                {step.name}
                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                </div>
                {children}
            </div>
        </div>
    );
}
