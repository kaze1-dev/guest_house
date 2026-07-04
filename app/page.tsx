import Description from "@/components/home/description";
import Facilities from "@/components/home/facilities";
import FAQs from "@/components/home/FAQs";
import Gallery from "@/components/home/gallery";
import Hero from "@/components/home/hero";
import Location from "@/components/home/location";
import Offer from "@/components/home/offer";
import Rooms from "@/components/home/ourRooms";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen text-white pb-10">
      <Navbar />
      <Hero />
      <Description />
      <Rooms />
      <Gallery />
      <Facilities />
      <Offer />
      <FAQs />
      <Location />
    </div>
  )
}