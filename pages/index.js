import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Portfolio from "../components/Portofolio";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
export default function Home() {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      {/* section tentang kami */}
      <div id="tentang-kami">
        <SectionTitle
          title=" Mengapa membuat website dengan kami?"
          id="tentang-kami"
        >
          <span className="text-indigo-600">RancangWeb</span> adalah agensi
          pembuatan website terbaik di medan, dengan pelayanan yang
          professional. Kami menyediakan jasa pembuatan website dengan budget
          minimal dan hasil maksimal.
        </SectionTitle>
        <Benefits data={benefitOne} />
      </div>
      <div id="solusi">
        <Benefits imgPos="right" data={benefitTwo} />
      </div>
      <div id="portofolio">
        <Portfolio />
      </div>
      <div id="testimoni">
        <SectionTitle pretitle="Testimoni" title="Cerita Sukses Bersama Klien">
          Setiap proyek yang kami bangun ditujukan untuk membantu bisnis
          berkembang lebih cepat. Berikut pengalaman langsung dari mereka yang
          telah meraih dampak positif melalui website yang kami kembangkan.
        </SectionTitle>
        <Testimonials />
      </div>
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
