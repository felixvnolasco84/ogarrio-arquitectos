
import AboutSection from "@/components/AboutSection";
import { projects } from "@/lib/utils";
import ProjectSection from "@/components/ProjectSection";
import HeroSection from "@/components/HeroSection";
import CTAContactSection from "@/components/Sections/CTAContactSection";
import HomeImageSection from "@/components/Sections/HomeImageSection";

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: "Lorem ipsum dolor sit.",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, soluta?",
//     alternates: {
//       canonical: ``,
//     },
//   };
// }

export default function Home() {

  return (
    <main className="container relative flex flex-col gap-24 pb-24 pt-4">
      <HeroSection />
      <div className="grid">
        <AboutSection />
        <ProjectSection projects={projects} />
      </div>
      <CTAContactSection />
      <HomeImageSection />
    </main>
  );
}
