import React, { useEffect, useState } from "react";
import Link from "next/link";

// queries
import { getCategories } from "../lib/queries";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block py-4 border-gray-400">
        <div className="md:float-left block">
          <Link href={"/"} legacyBehavior>
            <a>
              <span className="font-bold text-3xl text-slate-600">
                Electronics Notes
              </span>
            </a>
          </Link>
        </div>
        <div className="md:float-right text-gray-400 mt-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              legacyBehavior
            >
              <a>
                <span className="ml-4">{category.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
