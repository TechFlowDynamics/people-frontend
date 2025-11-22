import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
    return (
        <div className="@container px-4 sm:px-0">
            <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                    <div className="flex flex-col gap-2 text-left">
                        <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Welcome to OrgFlow!</h1>
                        <h2 className="text-gray-700 dark:text-gray-300 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">The all-in-one platform to manage your people, streamline HR, and build a great company culture.</h2>
                    </div>
                    <Link href="/setup/admin-setup">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-primary/90 transition-colors">
                            <span className="truncate">Let's Get Started</span>
                        </button>
                    </Link>
                </div>
                <div className="w-full aspect-video rounded-lg overflow-hidden relative @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_jvSflwVCivCfH5NC8FPFO1-OfvBJSFygPxRmUdn3NyH2NYAjms2JR2jeO9FPLX_QEMjkUGP3PS7uv01GY66xwZkXTkaCdHNKz-8CP2LGPb08RhYT_xN_9uF92dvrxhwueTdXMeJGNysrKe-MMADTpx-7SiZO-DQGsLvaBC09rLVTlIMmnCtpvrW_X9lBWvuRmdBR8_WB_unmvLUx4usLMsiroVyeNBIRMqSzJTweyvZ51yaIFc9ix61m8mrRrL2ffZemNmIj6Fm2"
                        alt="Abstract illustration of team members collaborating on a project board."
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
