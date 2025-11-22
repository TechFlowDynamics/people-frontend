import { Header } from "@/components/features/Header";
import { Hero } from "@/components/features/Hero";
import { FeatureGrid } from "@/components/features/FeatureGrid";
import { SetupProgress } from "@/components/features/SetupProgress";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header />
            <main className="flex-grow">
              <Hero />
              <FeatureGrid />
              {/* <SetupProgress /> */}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
