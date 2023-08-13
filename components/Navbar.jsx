"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { logo } from "@/assets";
import Link from "next/link";
import { nav_data } from "@/constants";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolling, setScrolling] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(true);
            clearTimeout(window.scrollTimeout);
            window.scrollTimeout = setTimeout(() => {
                setScrolling(false);
            }, 100); // Adjust the delay time as needed
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(window.scrollTimeout);
        };
    }, []);
    const backgroundColor = scrolling
        ? "rgba(32, 33, 43, 0.8)"
        : "rgba(32, 33, 43, 1)";

    return (
        <header
            className={`sticky-nav  text-white sticky top-0 transition-bg duration-300 z-10 h-30 items-center `}
            style={{ backgroundColor }}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" href="/">
                            <Image
                                src={logo}
                                alt={logo}
                                className="w-[6rem]"
                            ></Image>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm ">
                                {nav_data.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`${
                                                active == item.name
                                                    ? "text-white border-b-2 border-teal-600"
                                                    : "text-gray-400"
                                            }`}
                                        >
                                            <Link
                                                className={` font-bold transition hover:text-gray-500/75 `}
                                                href={item.path}
                                                onClick={() => {
                                                    setActive(item.name);
                                                    console.log(active)
                                                }}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                href="/"
                            >
                                Login
                            </Link>
                            <div className="hidden sm:flex">
                                <Link
                                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                    href="/"
                                >
                                    Register
                                </Link>
                            </div>
                        </div>

                        <div className="hamburger-menu flex items-center md:order-2">
                            <button
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                                onClick={() => {
                                    setToggleDropdown(!toggleDropdown);
                                }}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {toggleDropdown && (
                                <div
                                    className="tweak-element fixed top-0 left-0 w-full h-full bg-transparent z-0"
                                    onClick={() => {
                                        if (toggleDropdown)
                                            setToggleDropdown(false);
                                    }}
                                ></div>
                            )}
                            <div
                                className={`z-50 ${
                                    toggleDropdown ? "visible" : "hidden"
                                } my-4  list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600
                        absolute top-[3.5rem] right-[.25rem] w-[50%] flex flex-col text-2xl items-start justify-center p-4 `}
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3">
                                    <span className="block  text-gray-900 dark:text-white font-semibold">
                                        Prayan NGO
                                    </span>
                                    <span className="block   text-gray-500 truncate dark:text-gray-400">
                                        Our Tagline
                                    </span>
                                </div>
                                <ul
                                    className="py-2"
                                    aria-labelledby="user-menu-button"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Our Units
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Events
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2  text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;