import React from "react";
import Image from "next/image";
import Container from "./container";

// import assets image
import port1 from "../public/img/port-1.png";

const portfolioProjects = [
  {
    id: 1,
    title: "Website Konstruksi Dengan Desain Modern",
    category: "E-Commerce",
    description:
      "Platform online shop modern dengan sistem pembayaran terintegrasi dan dashboard admin lengkap",
    image: `${port1}`,
    tags: ["ReactJs", "Node.js", "Tailwind", "Gsap"],
    client: "PT Radian Aspal Beton",
    year: "2025",
    link: "https://radianaspalbeton.com/",
  },
  {
    id: 2,
    title: "Company Profile Manufacturing",
    category: "Company Profile",
    description:
      "Website perusahaan manufaktur dengan katalog produk interaktif dan form inquiry otomatis",
    image: "/img/portfolio/project2.jpg",
    tags: ["React", "TypeScript", "Node.js"],
    client: "PT Maju Jaya",
    year: "2024",
    link: "#",
  },
  {
    id: 3,
    title: "Restaurant Management System",
    category: "Web Application",
    description:
      "Sistem manajemen restoran lengkap dengan POS, inventory, dan online reservation",
    image: "/img/portfolio/project3.jpg",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    client: "Restoran Sedap",
    year: "2023",
    link: "#",
  },
  {
    id: 4,
    title: "Education Learning Platform",
    category: "E-Learning",
    description:
      "Platform pembelajaran online dengan video course, quiz interaktif, dan tracking progress",
    image: "/img/portfolio/project4.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    client: "EduTech Indonesia",
    year: "2023",
    link: "#",
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    category: "Marketplace",
    description:
      "Marketplace properti dengan fitur pencarian advanced dan virtual tour 360°",
    image: "/img/portfolio/project5.jpg",
    tags: ["Next.js", "Tailwind", "Maps API"],
    client: "PropertiKu",
    year: "2024",
    link: "#",
  },
  {
    id: 6,
    title: "Healthcare Appointment System",
    category: "Web Application",
    description:
      "Sistem booking appointment dokter online dengan reminder otomatis dan telemedicine",
    image: "/img/portfolio/project6.jpg",
    tags: ["React", "TypeScript", "Firebase"],
    client: "Klinik Sehat",
    year: "2024",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <Container className="mt-16 mb-20">
      <div className="flex w-full flex-col items-center justify-center text-center mb-12">
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          Portfolio
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Project yang Telah Kami Kerjakan
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Lebih dari 50+ project website telah kami selesaikan dengan tingkat
          kepuasan klien 100%. Berikut adalah beberapa project unggulan yang
          telah kami kerjakan dengan berbagai industri.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-trueGray-800"
          >
            <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-trueGray-700">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
                <span className="text-6xl font-bold text-white opacity-20">
                  {project.id}
                </span>
              </div>

              <div className="absolute right-4 top-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 backdrop-blur-sm dark:bg-trueGray-800/90 dark:text-indigo-400">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
                {project.title}
              </h3>

              <div className="mb-3 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {project.client}
                </span>
                <span>•</span>
                <span>{project.year}</span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all hover:gap-3 dark:text-indigo-400"
              >
                Lihat Project
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>

            <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors group-hover:border-indigo-500" />
          </div>
        ))}
      </div>
    </Container>
  );
}
