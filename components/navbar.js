import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const navigation = [
    { name: "tentang kami", href: "#tentang-kami" },
    { name: "solusi", href: "#solusi" },
    { name: "portofolio kami", href: "#portofolio" },
    { name: "testimoni", href: "#testimoni" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      let currentSection = "";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop - 100;

          if (scrollPosition >= offsetTop) {
            currentSection = section;
            break;
          }
        }
      }

      // Update active section
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (e.currentTarget && typeof e.currentTarget.blur === "function") {
      e.currentTarget.blur();
    }

    setActiveSection("");

    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white dark:bg-trueGray-900 shadow-md">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="#!">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <img
                        src="/nextly/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>RancangWeb</span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={(e) => handleClick(e, item.href)}
                        className={`w-full px-4 py-2 -ml-4 rounded-md transition-all ${
                          activeSection === item.href.substring(1)
                            ? "text-indigo-500 bg-indigo-100 dark:bg-trueGray-700 font-semibold"
                            : "text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-trueGray-700"
                        } focus:outline-none`}
                      >
                        {item.name}
                      </a>
                    ))}
                    <Link href="#!">
                      <a className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                        kontak kami!
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href={menu.href}
                  onClick={(e) => handleClick(e, menu.href)}
                  className={`inline-block px-4 py-2 text-lg font-normal no-underline rounded-md transition-all ${
                    activeSection === menu.href.substring(1)
                      ? "text-indigo-500 bg-indigo-100 dark:bg-trueGray-700 font-semibold"
                      : "text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-trueGray-700"
                  } focus:outline-none`}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-3 lg:flex nav__item">
          <Link href="#!">
            <a className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5 hover:bg-indigo-700 transition-colors">
              Kontak Kami!
            </a>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
