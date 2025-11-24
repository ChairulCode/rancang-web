import Image from "next/image";
import Container from "./container";

const testimonials = [
  {
    message:
      "Share a real testimonial that hits some of your benefits from one of your popular customers.",
    highlight: "testimonial",
    image: "/img/user1.jpg",
    name: "Sarah Steiner",
    title: "VP Sales at Google",
    span: "lg:col-span-2 xl:col-auto",
  },
  {
    message:
      "Make sure you only pick the right sentence to keep it short and simple.",
    highlight: "right sentence",
    image: "/img/user2.jpg",
    name: "Dylan Ambrose",
    title: "Lead Marketer at Netflix",
  },
  {
    message:
      "This is an awesome landing page template I've seen. I would use this for anything.",
    highlight: "awesome",
    image: "/img/user3.jpg",
    name: "Gabrielle Winn",
    title: "Co-founder of Acme Inc",
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
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image src={image} width={40} height={40} alt="Avatar" />
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
