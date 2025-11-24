import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Solusi Website Profesional untuk Bisnis Anda",
  desc: "Setiap website yang kami buat dirancang untuk meningkatkan kepercayaan, menarik perhatian pelanggan, dan memperkuat identitas bisnis Anda secara digital.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Branding yang Lebih Kuat",
      desc: "Tingkatkan citra bisnis dengan tampilan yang modern, rapi, dan profesional.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Optimasi untuk Konversi",
      desc: "Struktur dan desain dibuat untuk membantu meningkatkan peluang penjualan.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Tampilan yang Lebih Meyakinkan",
      desc: "Website yang dipoles dengan baik membuat bisnis Anda terlihat jauh lebih kredibel.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Dibangun dengan Teknologi Modern untuk Hasil Bisnis Maksimal",
  desc: "Setiap website dibuat menggunakan teknologi terbaru agar bisnis Anda tampil lebih profesional, lebih cepat, dan lebih siap bersaing di dunia digital.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Kecepatan Tinggi untuk Pengalaman Terbaik",
      desc: "Website yang cepat membuat pelanggan betah dan meningkatkan potensi konversi.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Fondasi Teknis yang Kuat",
      desc: "Dibangung dengan Next.js, TailwindCSS, dan stack modern sehingga website stabil, aman, dan mudah dikembangkan.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Standar Modern untuk Branding Profesional",
      desc: "Mode terang & gelap serta desain bersih menjadikan bisnis Anda tampil lebih premium dan terpercaya.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
