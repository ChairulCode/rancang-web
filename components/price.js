"use client";

import Image from "next/image";
import Container from "./container";

// import assets image
import port1 from "../public/img/port-1.png";
import port2 from "../public/img/port-2.png";
import port3 from "../public/img/port-3.png";

const pricingPackages = [
  {
    id: 1,
    title: "Paket Bronze",
    price: "500K",
    priceLabel: "Mulai dari",
    category: "Landing Page Template",
    description: "Cocok untuk UMKM dengan budget terbatas",
    image: port1,
    features: [
      "1 halaman landing page",
      "Pilihan template UI (3-5 opsi)",
      "Revisi 1x",
      "Integrasi WA",
      "Hosting opsional",
    ],
    popular: false,
    link: "#",
  },
  {
    id: 2,
    title: "Paket Silver",
    price: "1 Juta",
    priceLabel: "Mulai dari",
    category: "Custom Landing Page",
    description: "Landing page full custom",
    image: port2,
    features: [
      "Desain custom",
      "Revisi 3x",
      "SEO basic",
      "Animasi ringan",
      "Copywriting basic",
    ],
    popular: false,
    link: "#",
  },
  {
    id: 3,
    title: "Paket Gold",
    price: "3 juta",
    priceLabel: "Mulai dari",
    category: "Landing Page + Admin CRUD",
    description: "Untuk bisnis yang butuh dashboard",
    image: port3,
    features: [
      "Landing page custom",
      "Dashboard admin (CRUD sederhana: produk, artikel, galeri, dll.)",
      "Database setup",
      "Revisi 3x",
      "Sistem login admin",
    ],
    notes: [
      "Lu bisa upsell hosting + domain: 250-500 ribu/tahun",
      "Tambah fitur = tambah harga",
    ],
    popular: true,
    link: "#",
  },
];

export default function Price() {
  return (
    <Container className="mt-16 mb-20">
      {/* Heading */}
      <div className="flex w-full flex-col items-center justify-center text-center mb-14">
        <div className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-bold tracking-wider text-indigo-700 uppercase dark:bg-indigo-900/30 dark:text-indigo-400">
          Paket Harga
        </div>
        <h2 className="max-w-3xl mt-4 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-5xl dark:text-white">
          Pilih Paket yang Sesuai dengan Kebutuhan Anda
        </h2>
        <p className="max-w-2xl mt-5 text-lg leading-relaxed text-gray-600 lg:text-xl dark:text-gray-300">
          Kami menyediakan berbagai paket untuk memenuhi kebutuhan bisnis Anda,
          dari UMKM hingga perusahaan yang membutuhkan sistem lengkap.
        </p>
      </div>

      {/* GRID LIST */}
      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {pricingPackages.map((pkg) => (
          <div
            key={pkg.id}
            className={`group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 dark:bg-trueGray-800 ${
              pkg.popular ? "ring-2 ring-indigo-500 shadow-xl scale-105" : ""
            }`}
          >
            {/* POPULAR BADGE */}
            {pkg.popular && (
              <div className="absolute left-1/2 -translate-x-1/2 top-4 z-30">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  ⭐ PALING POPULER
                </span>
              </div>
            )}

            {/* IMAGE */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title}
                layout="fill"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={pkg.id === 1}
              />

              {/* CATEGORY BADGE */}
              <div className="absolute left-4 top-4 z-20">
                <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-indigo-600 backdrop-blur-sm shadow-lg dark:bg-trueGray-800/95 dark:text-indigo-400">
                  {pkg.category}
                </span>
              </div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            </div>

            {/* CONTENT */}
            <div className="p-6 relative z-20">
              {/* TITLE & PRICE */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {pkg.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {pkg.priceLabel}
                  </span>
                  <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    {pkg.price}
                  </span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="mb-5 text-sm text-gray-600 dark:text-gray-300 italic">
                {pkg.description}
              </p>

              {/* FEATURES LIST */}
              <div className="mb-5">
                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-3">
                  Isi paket:
                </h4>
                <ul className="space-y-2.5">
                  {pkg.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* NOTES (if available) */}
              {pkg.notes && (
                <div className="mb-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                  <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 mb-2">
                    Catatan:
                  </h4>
                  <ul className="space-y-1">
                    {pkg.notes.map((note, index) => (
                      <li
                        key={index}
                        className="text-xs text-amber-700 dark:text-amber-300 flex items-start gap-1.5"
                      >
                        <span className="mt-0.5">💡</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA BUTTON */}
              <a
                href={pkg.link}
                className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  pkg.popular
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                Pilih Paket Ini
              </a>
            </div>

            {/* ANIMATED BORDER */}
            <div
              className={`pointer-events-none absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                pkg.popular
                  ? "border-indigo-500"
                  : "border-transparent group-hover:border-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
              }`}
            />
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 px-8 py-10 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            Butuh Paket Custom?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl">
            Diskusikan kebutuhan spesifik Anda dengan tim kami. Kami siap
            membantu memberikan solusi terbaik untuk bisnis Anda.
          </p>
          <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </Container>
  );
}
