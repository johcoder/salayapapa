import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import AboutSalayaPapa from "@/components/ui/Section";
import VideoYaPapaModal from "@/components/ui/Video";
import Image from "next/image";

export default function Home() {
  return (
    <><Hero /><AboutSalayaPapa />
    <VideoYaPapaModal />
    <Footer />
    </>
  );
}
