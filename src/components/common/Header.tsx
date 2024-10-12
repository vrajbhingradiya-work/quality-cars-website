"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlineViewList as MenuIcon } from "react-icons/hi";
import { RiSearch2Line as SearchIcon } from "react-icons/ri";
import BrandLogo from "../../assets/images/company-logo/wheels of world white.png";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { useRouter } from "next/navigation";
import { defaultFilterQueries } from "@/lib/defaultFilter";
import { fetchCars } from "@/lib/store/carSlice";
import Link from "next/link";
import { NavPhone } from "./NavPhone";
import { NavDesktop } from "./NavDesktop";
import { style } from "framer-motion/client";
import Loader from "../Loader";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const loading = useAppSelector((state) => state.loadingTransition.isLoading);

  const dispatch = useAppDispatch();
  const path = usePathname();
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  useEffect(() => {
    //  dispatch(startLoadingTransition(""));

    let newFilterQueries = defaultFilterQueries(true);
    // console.log(path);
    if (path === "/new") {
      newFilterQueries = defaultFilterQueries(false);
    }
    // console.log("new filter queries from navbar", newFilterQueries);
    dispatch(fetchCars(newFilterQueries));
    setTimeout(() => {
      setIsInitialLoading(false);
    }, 5500);
  }, [dispatch, path]);

  return isInitialLoading ? (
    <Loader />
  ) : (
    <div className="fixed top-0 left-0 w-full z-30">
      <div className=" flex justify-center items-center ">
        <div className="w-full px-6 xl:px-[10%] bg-gradient-to-b from-black via-black/80 to-transparent bg-[length:65%_100%] ">
          <div className="  xl:grid flex  xl:grid-cols-3 justify-between items-center py-8 xl:border-b-[1px] border-double border-white/50 ">
            <div className="flex gap-4 items-center justify-start  px-2 tracking-wider cursor-pointer xl:hidden">
              {/* <AnimatedHamburgerButton /> */}
              <NavPhone />
              <span className="-ml-8 hidden">MENU</span>
            </div>
            <div className="hidden xl:flex gap-4 items-center  px-2 tracking-wider cursor-pointer">
              {/* <AnimatedHamburgerButton /> */}
              <NavDesktop />
              <span className="-ml-8 ">MENU</span>
            </div>
            <motion.div>
              <Link
                href="/"
                className="flex justify-end xl:justify-center items-center  "
              >
                <Image
                  alt="brand logo"
                  src={BrandLogo}
                  className="object-contain h-12 w-12 hover:scale-150 transition ease-in-out duration-700"
                />
              </Link>
            </motion.div>
            <Link
              href="/collection"
              className="hidden xl:flex gap-4 items-center justify-end px-2 tracking-wider cursor-pointer "
            >
              <SearchIcon className="h-6 w-6 fill-white" />
              <span>EXPLORE NOW</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
