// components/AboutUsSection.js
import Link from "next/link";

// import Link from "next/link";
const About = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-red-900 to-red-800 text-white flex items-center ">
      <div className="container mx-auto px-6">
        <div className="max-w-xl">
          {/* About Us Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            About Us
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-base md:text-xl">
            Discover Our Mission: Empowering Individuals Through English
            Language. Learn About Our Commitment to Excellence in English
            Language.
          </p>

          {/* Contact Us Button */}
          <div className="mt-8">
            <a
              href="mailto:institute.hhie@gmail.com"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
