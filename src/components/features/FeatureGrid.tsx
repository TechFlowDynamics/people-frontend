export function FeatureGrid() {
    return (
        <div className="flex flex-col gap-10 px-4 py-10 @container">
            <div className="flex flex-col gap-4">
                <h2 className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">Everything you need to manage your team</h2>
                <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal max-w-[720px]">We'll guide you through a few simple steps to set up your organization's workspace.</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-0">
                <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-4 flex-col">
                    <div className="text-primary">
                        <span className="material-symbols-outlined">group</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Centralized Employee Data</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Manage all employee records with ease in one secure, centralized location.</p>
                    </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-4 flex-col">
                    <div className="text-primary">
                        <span className="material-symbols-outlined">rocket_launch</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Automated Onboarding</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Automate repetitive HR tasks and create seamless onboarding experiences.</p>
                    </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark p-4 flex-col">
                    <div className="text-primary">
                        <span className="material-symbols-outlined">payments</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Simplified Payroll</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Gain powerful insights into your workforce with comprehensive, easy-to-understand reports.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
