import Link from "next/link";
import React from "react";
import EmailSignup from "../miniComponents/EmailSignup";
import { FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import CopyrightSection from "../miniComponents/CopyrightSection";

function Footer() {
  return (
    <div className="bg-black">
      <EmailSignup />
      <FooterLinks />
    </div>
  );
}

export default Footer;

const footerCategoryLinks = {
  qcworld: {
    category: "QC WORLD",
    links: [
      {
        title: "Why Us",
        href: "/",
      },
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "Career",
        href: "/",
      },
      {
        title: "Associates",
        href: "/",
      },
      {
        title: "QC Squad",
        href: "/",
      },
      {
        title: "Wallpaper",
        href: "/wallpaper",
      },
      {
        title: "Our Showroom",
        href: "/",
      },
    ],
  },
  general: {
    category: "GENERAL",
    links: [
      {
        title: "Sell Car",
        href: "/sell-car",
      },
      {
        title: "FAQs",
        href: "/faqs",
      },
      {
        title: "Videos",
        href: "/",
      },
      {
        title: "Blog",
        href: "/",
      },
      {
        title: "Auto Guide",
        href: "/",
      },
      {
        title: "Car News",
        href: "/",
      },
      {
        title: "Finance & Insurance",
        href: "/insurance",
      },
      {
        title: "Sales Login",
        href: "/",
      },
    ],
  },
  brands: {
    category: "BRANDS",
    links: [
      { title: "Audi", href: "/collection" },
      { title: "BMW", href: "/collection" },
      { title: "Ferrari", href: "/collection" },
      { title: "Land Rover", href: "/collection" },
      { title: "Mercedes-Benz", href: "/collection" },
      { title: "Porsche", href: "/collection" },
      { title: "Toyota", href: "/collection" },
      { title: "Volvo", href: "/collection" },
    ],
    // links: [
    //   { title: "Aprilia", href:"/collection/aprilia" },
    //   { title: "Aston Martin", href:"/collection/astonmartin" },
    //   { title: "Audi", href:"/collection/audi" },
    //   { title: "Avanturaa Choppers", href:"/collection/avanturaachoppers" },
    //   { title: "Bentley", href:"/collection/bentley" },
    //   { title: "BMW", href:"/collection/bmw" },
    //   { title: "Buick", href:"/collection/buick" },
    //   { title: "Cadillac", href:"/collection/cadillac" },
    //   { title: "Chevrolet", href:"/collection/chevrolet" },
    //   { title: "Chrysler", href:"/collection/chrysler" },
    //   { title: "Citroen", href:"/collection/citroen" },
    //   { title: "DC", href:"/collection/dc" },
    //   { title: "Ducati", href:"/collection/ducati" },
    //   { title: "Ferrari", href:"/collection/ferrari" },
    //   { title: "Fiat", href:"/collection/fiat" },
    //   { title: "Ford", href:"/collection/ford" },
    //   { title: "Harley Davidson", href:"/collection/harleydavidson" },
    //   { title: "Honda", href:"/collection/honda" },
    //   { title: "Hummer", href:"/collection/hummer" },
    //   { title: "Hyundai", href:"/collection/hyundai" },
    //   { title: "Indian", href:"/collection/indian" },
    //   { title: "Infinity", href:"/collection/infinity" },
    //   { title: "Jaguar", href:"/collection/jaguar" },
    //   { title: "Jeep", href:"/collection/jeep" },
    //   { title: "Kawasaki", href:"/collection/kawasaki" },
    //   { title: "KIA", href:"/collection/kia" },
    //   { title: "KTM", href:"/collection/ktm" },
    //   { title: "Lamborghini", href:"/collection/lamborghini" },
    //   { title: "Land Rover", href:"/collection/landrover" },
    //   { title: "Lexus", href:"/collection/lexus" },
    //   { title: "Maserati", href:"/collection/maserati" },
    //   { title: "Maybach", href:"/collection/maybach" },
    //   { title: "McLaren", href:"/collection/mclaren" },
    //   { title: "Mercedes-Benz", href:"/collection/mercedesbenz" },
    //   { title: "Mini", href:"/collection/mini" },
    //   { title: "MV Agusta", href:"/collection/mvagusta" },
    //   { title: "Nissan", href:"/collection/nissan" },
    //   { title: "Porsche", href:"/collection/porsche" },
    //   { title: "Rolls-Royce", href:"/collection/rollsroyce" },
    //   { title: "Royal Enfield", href:"/collection/royalenfield" },
    //   { title: "Skoda", href:"/collection/skoda" },
    //   { title: "Suzuki", href:"/collection/suzuki" },
    //   { title: "Tesla", href:"/collection/tesla" },
    //   { title: "Toyota", href:"/collection/toyota" },
    //   { title: "Triumph", href:"/collection/triumph" },
    //   { title: "Volkswagen", href:"/collection/volkswagen" },
    //   { title: "Volvo", href:"/collection/volvo" },
    // ],
  },
  style: {
    category: "QC WORLD",
    links: [
      { title: "SUV", href: "/collection" },
      { title: "Sedan", href: "/collection" },
      { title: "Convertible", href: "/collection" },
      { title: "Coupe", href: "/collection" },
      { title: "Sports", href: "/collection" },
      { title: "MUV-MPV", href: "/collection" },
      { title: "Hatchback", href: "/collection" },
    ],
    // links: [
    //   { title: "SUV", href: "/style/suv" },
    //   { title: "Sedan", href: "/style/sedan" },
    //   { title: "Convertible", href: "/style/convertible" },
    //   { title: "Coupe", href: "/style/coupe" },
    //   { title: "Sports", href: "/style/sports" },
    //   { title: "MUV-MPV", href: "/style/muv-mpv" },
    //   { title: "Hatchback", href: "/style/hatchback" },
    // ],
  },
};
function FooterLinks() {
  return (
    <div className="py-16 lg:px-64 md:p-16 p-8 flex flex-col gap-8">
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-16 ">
        <div className="col-span-1 flex flex-col gap-6">
          <span className="text-white tracking-[0.055em]">QC WORLD</span>
          <span className="w-full h-1 border-b-[1px] border-[#232323]"></span>
          <div>
            <ul>
              {footerCategoryLinks.qcworld.links.map(
                (element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>{element?.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <span className="text-white tracking-[0.055em]">GENERAL</span>
          <span className="w-full h-1 border-b-[1px]  border-[#232323]"></span>
          <div>
            <ul>
              {footerCategoryLinks.general.links.map(
                (element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>{element?.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-6">
          <span className="text-white tracking-[0.055em]">BRANDS</span>
          <span className="w-full h-1 border-b-[1px] border-[#232323]"></span>
          <div className="grid  grid-cols-2 xl:grid-cols-4 gap-4">
            <ul>
              {footerCategoryLinks.brands.links
                .slice(0, 12)
                .map((element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>Used {element?.title}</Link>
                  </li>
                ))}
            </ul>
            <ul>
              {footerCategoryLinks.brands.links
                .slice(12, 24)
                .map((element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>Used {element?.title}</Link>
                  </li>
                ))}
            </ul>
            <ul>
              {footerCategoryLinks.brands.links
                .slice(24, 36)
                .map((element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>Used {element?.title}</Link>
                  </li>
                ))}
            </ul>
            <ul>
              {footerCategoryLinks.brands.links
                .slice(36, 49)
                .map((element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>Used {element?.title}</Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <span className="text-white tracking-[0.055em]">STYLE</span>
          <span className="w-full h-1 border-b-[1px] border-[#232323]"></span>
          <div>
            <ul>
              {footerCategoryLinks.style.links.map(
                (element: any, index: any) => (
                  <li
                    key={index}
                    className="list-disc tracking-[0.055em] text-[#6E6E6E] hover:text-white transition hover:ease-in-out duration-500 text-sm ml-5"
                  >
                    <Link href={element.href}>{element?.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full border-b-[1px] border-[#232323]"></div>

      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col gap-4 text-sm text-[#6E6E6E] tracking-[0.05em]">
          <span className=" text-white">Headquarters</span>
          <Link href="https://maps.app.goo.gl/eRZCYbNrFasngtjS9" className="">
            Plot no. 27 Surajpura House, Rail Nagar, T. N. Mishra Marg,
            Jaipur-302019
          </Link>
        </div>
      </div>
      <div className="h-[1px] w-full border-b-[1px] border-[#232323]"></div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
        <Link
          href="/buycar"
          className="flex flex-col gap-4 text-sm text-[#6E6E6E] tracking-[0.05em]"
        >
          <span className=" text-white">Buy Car</span>
          <span className="flex gap-2 items-center">
            <PhoneIcon />
            +91 9829407612
          </span>
        </Link>
        <Link
          href="/buycar"
          className="flex flex-col gap-4 text-sm text-[#6E6E6E] tracking-[0.05em]"
        >
          <span className=" text-white">Sell Car</span>
          <span className="flex gap-2 items-center">
            <PhoneIcon />
            +91 9799907612
          </span>
        </Link>
      </div>
      <div className="h-[1px] w-full border-b-[1px] border-[#232323]"></div>
      <CopyrightSection />
    </div>
  );
}
