

import DespreNoi from "@/components/DespreNoi";
import LandingPage from "@/components/LandingPage";
import Servicii from "@/components/Servicii";
import Contact from "../components/Contact";
import Pachete from "@/components/Pachete";
import Statistici from "@/components/Statistici";

export default function Home() {
  return (
  <div>
  <LandingPage/>
  <DespreNoi/>
  <Servicii/>
  <Pachete />
  <Contact/>
  </div>
  
  );
}
