import Image from "next/image";
import Container from "./container";

const testimonials = [
  {
    message:
      "Kami sangat puas dengan hasil website dari tim kamu. Layoutnya bersih, informatif, dan profesional—tepat untuk menunjukkan portofolio proyek konstruksi kami. Timmu cepat tanggap, paham kebutuhan industri, dan berhasil membuat halaman yang membuat klien baru langsung percaya.",
    highlight: "bersih, informatif, dan profesional",
    image: "https://i.pravatar.cc/150?img=12",
    name: "customer - 1",
    title: "founder of radian aspal beton medan",
  },
  {
    message:
      "Desain web yang dibuat benar-benar bikin pelanggan betah. Warna, foto menu, dan alur pemesanan tampak rapi—membuat kopi kami terasa lebih spesial sebelum orang sampai ke kedai. Sejak live, traffic naik dan pesan lewat website jadi lebih sering.",
    highlight: "terasa lebih spesial",
    image: "https://i.pravatar.cc/150?img=5",
    name: "customer - 2",
    title: "founder of kinisocial club",
  },
  {
    message:
      "Website baru dari tim kamu bikin clubhouse kami terlihat modern dan mudah diakses. Jadwal meja, harga sewa, dan promo event tampil jelas; pelanggan bisa booking tanpa ribet. Sejak diluncurkan, lebih banyak komunitas datang dan sering cek update.",
    highlight: "modern dan mudah diakses",
    image: "https://i.pravatar.cc/150?img=33",
    name: "customer - 3",
    title: "founder of eighpool billiard medan",
  },
];

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item, index) => (
          <div key={index} className={item.span ? item.span : ""}>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal">
                {item.message.replace(item.highlight, "")}
                <Mark>{item.highlight}</Mark>
              </p>

              <Avatar image={item.image} name={item.name} title={item.title} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

function Avatar({ image, name, title }) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14 ring-4 ring-indigo-600">
        <Image
          src={image}
          width={56}
          height={56}
          alt="Avatar"
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{name}</div>
        <div className="text-gray-600 dark:text-gray-400">{title}</div>
      </div>
    </div>
  );
}

function Mark({ children }) {
  return (
    <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
      {children}
    </mark>
  );
}
