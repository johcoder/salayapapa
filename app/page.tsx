import SlidingCards from "@/components/ui/Cardslider";
import Hero from "@/components/ui/Hero";
import AboutSalayaPapa from "@/components/ui/Section";
import VideoYaPapaModal from "@/components/ui/Video";
export default function Home() {
  return (
    <><Hero /><AboutSalayaPapa />
    <VideoYaPapaModal />
    <SlidingCards />
    </>
  );
}
