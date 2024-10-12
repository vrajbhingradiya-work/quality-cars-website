"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/quality-cars-logo.png";
import BannerImage from "../../../assets/images/navbar-banner-image.jpg";
import { IoCarSportOutline as CarIcon } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import LoadingPageTranstion from "../loading/LoadingPageTranstion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

import { fetchCars } from "@/lib/store/carSlice";
import SlideInFromBottom from "../utils/SlideInFromBottom";
import { defaultFilterQueries } from "@/lib/defaultFilter";
import SelectCarsTypeModal from "../home/SelectCarsTypeModal";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const loading = useAppSelector((state) => state.loadingTransition.isLoading);

  const dispatch = useAppDispatch();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    //  dispatch(startLoadingTransition(""));
    setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    let newFilterQueries = defaultFilterQueries(true);
    // console.log(path);
    if (path === "/new") {
      newFilterQueries = defaultFilterQueries(false);
    }
    // console.log("new filter queries from navbar", newFilterQueries);
    dispatch(fetchCars(newFilterQueries));
  }, [dispatch, path]);

  // useEffect(() => {
  //   if (path !== "/") {
  //     dispatch(startLoadingTransition(""));

  //     setTimeout(() => {
  //       dispatch(stopLoadingTransition(""));
  //     }, 2000);
  //   }
  // }, [params, dispatch, path]);

  const menuOptions = [
    {
      title: "Pre-owned Cars",
      href: "/collection",
    },
    {
      title: "New Cars",
      href: "/new-cars",
    },
    {
      title: "Sell Car",
      href: "/sell-car",
    },

    // {
    //   title: "Vintage Cars",
    //   href: "/collection",

    // },

    // {
    //   title: "Merchandise",
    //   href: "/merchandise",

    // },

    {
      title: "Wallpaper",
      href: "/wallpaper",
    },

    // {
    //   title: "Why Us",
    //   href: "/why-us",

    // },

    // {
    //   title: "Career",
    //   href: "/career",
    //   svg: (
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    //       <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    //     </svg>
    //   ),
    // },
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
    {
      title: "Compare Cars",
      href: "/compare-cars",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
        </svg>
      ),
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Insurance",
      href: "tel:9829407612",
    },
    // {
    //   title: "QC Squad",
    //   href: "/qcsquad",
    //   svg: (
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    //       <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    //     </svg>
    //   ),
    // },
    // {
    //   title: "Showroom",
    //   href: "/showroom",

    // },
    // {
    //   title: "The Team",
    //   href: "/team",

    // },
    {
      title: "EMI Calculator",
      href: "/emi-calculator",
    },
    {
      title: "FAQ",
      href: "/faqs",
    },
  ];

  if (!menuOpen) {
    if (path === "/" && isOpen) {
      return <SelectCarsTypeModal isOpen={isOpen} setIsOpen={setIsOpen} />;
    } else {
      return (
        <div
          className={`px-[10vw] w-full ${
            loading ? "fixed top-0 left-0 z-50 bg-black " : ""
          } h-[120px] flex justify-between items-center overflow-hidden bg-black text-white`}
        >
          <Link className="flex justify-center items-center " href="/">
            <div className="w-[100px] lg:w-[160px] ">
              <Image src={logo} className="object-contain w-full " alt="Logo" />
            </div>
          </Link>
          <div className="flex gap-8 xl:justify-end   text-xl  justify-end items-center w-[50%]">
            {/*
            <Link className="hidden xl:block" href="tel:9829407612">
            // options  
            BUY - 9829 4076 12
          </Link>
          <div className="hidden xl:block text-xl">
            |
          </div>
          <Link className="hidden xl:block" href="/sell-car">
            {" "}
            SELL - 9829 4076 12
          </Link>
          <div className="hidden xl:block text-xl">
            |
            // straight slash seperator 
          </div>  */}
            <Link
              className="hidden xl:block text-white"
              href="tel:+919829407612"
            >
              {" "}
              QUALITY CARS - +91 9829 4076 12
            </Link>
            <div className="hidden xl:block text-xl text-white">
              |{/* straight slash seperator */}
            </div>
            {/* <Link
            href="/stories"
            className="hidden xl:flex gap-2 items-center text-white fill-white"
          >
            <svg
              className="fill-white h-[20px] w-[20px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
            </svg>
            <p>STORIES</p>
          </Link> */}
            <button
              aria-label="Toggle menu"
              type="button"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <svg
                className="fill-white h-[30px] w-[30px] hover:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z" />
              </svg>
            </button>
          </div>
          {loading && <LoadingPageTranstion />}
        </div>
      );
    }
  } else {
    return (
      <div className="fixed top-0 w-[100vw] h-[100vh] left-0 bg-[#151515]  z-50 overflow-hidden text-white  ">
        <SlideInFromBottom sequence={2}>
          <div className="flex h-full w-full">
            {/* MENU IMAGE */}
            <button
              type="button"
              aria-label="btn"
              onClick={() => {
                router.push("/");
                setMenuOpen(false);
              }}
              className="hidden md:block w-[60%] xl:w-[30%] h-[100vh] bg-white "
            >
              <Image
                src={BannerImage}
                alt="Banner Image"
                className="object-cover h-full w-full"
              />
            </button>

            <div className="flex flex-col  w-full md:w-[40%] xl:w-[70%] h-[100%]">
              {/* cross mark */}
              <div className="flex justify-between  items-center py-4 px-16 fill-white ">
                <div className="w-full">
                  <div className=" w-[105px] lg:w-[155px] py-8 pr-8 xl:pt-8 xl:pr-0 xl:py-0  xl:translate-x-20">
                    <Image
                      src={logo}
                      className="object-contain w-full"
                      alt="Logo"
                    />
                  </div>
                </div>
                <div className="flex justify-center w-full">
                  <button
                    aria-label="Toggle menu"
                    type="button"
                    className="h-full w-[25px]  "
                    onClick={() => {
                      setMenuOpen(!menuOpen);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* MENU options */}
              <div className=" xl:my-16 w-full grid grid-cols-1 xl:grid-cols-2  gap-3 xl:gap-6 text-left text-xl items-center pl-16 pt-12 xl:px-[10%] xl:p-10 h-[70vh] xl:h-[50vh] scroll overflow-x-hidden xl:overflow-y-scroll overflow-y-auto bg-gradient-to-b to-transparent">
                {/* option 1 */}
                {menuOptions.map((option) => (
                  <button
                    key={option.href}
                    onClick={() => {
                      setMenuOpen(false);
                      router.push(option.href);
                    }}
                    className="hover-navitem fill-white flex p-4 "
                  >
                    <CarIcon className="h-[35px] w-[35px] mr-3" />
                    {option.title}
                  </button>
                ))}
              </div>
              <div className="pl-20 p-8 xl:pl-36 flex gap-6 items-center bg-gradient-to-t  to-transparent">
                <span className=" tracking-[.25em] font-semibold text-[#eb5252]">
                  FOLLOW
                </span>
                <Link
                  href="https://www.instagram.com/quality_cars_jaipur/?hl=en"
                  className="icon-hover flex content-center h-[20px] w-[20px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/qualitycarsjpr/"
                  className="icon-hover flex content-center h-[18px] w-[18px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </Link>
                {/* <Link
                  href="/insta"
                  className="icon-hover flex content-center h-[24px] w-[24px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </Link> */}
              </div>
            </div>
          </div>
          {/* {loading && <LoadingPageTranstion />} */}
        </SlideInFromBottom>
      </div>
    );
  }
}

export default Navbar;
