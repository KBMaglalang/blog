import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto px-10 mb-8">
      <div className="border-t w-full inline-block py-4 border-gray-400">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link href={"/"} className="hover:underline">
            Blog™
          </Link>
          . All Rights Reserved.
        </span>
        <div className="md:float-right text-blue-400 mt-2">placeholder</div>
      </div>
    </footer>
  );
};

export default Footer;
