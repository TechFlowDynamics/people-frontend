export function SetupProgress() {
    return (
        <div className="px-4 py-10">
            <div className="flex flex-col gap-3 p-4 bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex gap-6 justify-between">
                    <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Setup Progress</p>
                </div>
                <div className="rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2 rounded-full bg-primary" style={{ width: '25%' }}></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Step 1 of 4</p>
            </div>
        </div>
    );
}
