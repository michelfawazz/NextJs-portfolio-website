"use client"
import Link from "next/link";

import { useEffect } from "react";


export default function Footer() {

  return (
    <div className="max-w-screen-lg mx-auto w-full pt-12 mb-8" data-aos="fade-down">
      <div className="flex items-center space-x-5">
        <div className="flex-1 h-px bg-white/20"></div>
        <div className="text-4xl font-bold text-primary uppercase">Michel</div>
        <div className="flex-1 h-px bg-white/20"></div>
      </div>
      <div className="col-span-4 text-center flex flex-col lg:flex-row justify-between items-center mt-4">
        <p className="text-zinc-300 font-normal">© 2023 michel All rights reserved.</p>
        <p className="text-zinc-400 font-normal">
          Powered
          by{" "}
          <Link href="#" target="_blank" className="text-white font-medium">
            Michel
          </Link>
        </p>
      </div>
    </div>
  );
}