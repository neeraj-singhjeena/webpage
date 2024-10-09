// import Image from "next/image";
// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
import NavBar from "./Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <section
        id="Courses"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">
          Courses
        </h1>
      </section>

      <section id="Project" className=" text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Project
        </h1>
      </section>

      {/* <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact{" "}
        </h1>
      </section> */}
      {/* <section
        id="projects"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Projects
        </h1>
      </section> */}
      <Footer></Footer>
    </div>
  );
}
