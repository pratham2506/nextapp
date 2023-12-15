
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Desc from "./components/desc/Desc";
import Footer from "./components/footer/Footer";

import Link from "next/link"
import Course from "./components/why/Course";
import Dgca from "./components/dgca/Dgca";
import Newcompo from "./components/newcompo/Newcompo";
import Nearcep from "./components/NearCEP/NearCEP";
import VideoCon from "./components/VideoCon/VideoCon";
import Partners from "./components/Partners/Partners";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Slider/>
      <Desc/>
      <Course/>
      <Dgca/>
      <Newcompo/>
      <Nearcep/>
      <VideoCon/>
      <Partners/>
      <Footer/>
    </main>
  )
}
