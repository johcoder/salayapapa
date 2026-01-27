import AboutPrayerNetwork from "@/components/ui/Aboutnetwork";
import SlidingCards from "@/components/ui/Cardslider";
import Hero from "@/components/ui/Hero";
import PrayerCards from "@/components/ui/PrayerCards";
import AboutSalayaPapa from "@/components/ui/Section";
import VideoYaPapaModal from "@/components/ui/Video";
export default function Home() {
  return (
    <><Hero /><AboutPrayerNetwork />
    <PrayerCards />
    <VideoYaPapaModal />
    <SlidingCards />
    </>
  );
}
