import Description from "@/components/home/description";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Rooms from "@/components/home/ourRooms";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Description />
      <Rooms />
      <Gallery />
    </div>
  )
}