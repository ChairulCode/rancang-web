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
      <SectionTitle title=" Mengapa membuat website dengan kami?">
        <span className="text-indigo-600">RancangWeb</span> adalah agensi
        pembuatan website terbaik di medan, dengan pelayanan yang professional.
        Kami menyediakan jasa pembuatan website dengan budget minimal dan hasil
        maksimal.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Portfolio />
      <SectionTitle pretitle="Testimoni" title="Cerita Sukses Bersama Klien">
        Setiap proyek yang kami bangun ditujukan untuk membantu bisnis
        berkembang lebih cepat. Berikut pengalaman langsung dari mereka yang
        telah meraih dampak positif melalui website yang kami kembangkan.
      </SectionTitle>

      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
