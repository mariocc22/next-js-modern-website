import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-white-800 flex justify-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-1">
      <p>Copywrite &copy; 2021 | Mario Website</p>
      <div className="flex gap-x-9">
        <Link href="https://google.com" target="_blank">
          Terms and Conditions
        </Link>
        <Link href="https://google.com" target="_blank">
          Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
