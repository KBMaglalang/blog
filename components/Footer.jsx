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
        <div className="md:float-right text-blue-400 ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a href="https://www.freepik.com/free-vector/white-background-with-triangle-patterns_4403214.htm#query=abstract%20background&position=37&from_view=keyword">
              Background Image by starline
            </a>{" "}
            on Freepik
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
