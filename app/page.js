"use client";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Generate from "@/components/Generate";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div className=" place-items-center">
        <div>
          <Generate />
        </div>
        <div className="lg:mx-96 md:mx-auto sm:mx-auto xs:mx-auto">
          <Cards />
        </div>
        <div className="relative bottom-0">
          <Footer />
        </div>
      </div>
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </main>
  );
}
