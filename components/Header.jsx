import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block py-4 border-gray-400">
        <div className="md:float-left block">
          <Link href={"/"}>
            <span className="font-bold text-3xl text-slate-600">Blog</span>
          </Link>
        </div>
        <div className="md:float-right text-blue-400 mt-2">
          <Link href={"#"}>placeholder</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
