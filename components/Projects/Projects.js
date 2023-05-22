"use client"
import Image from "next/image";
import projects from "./projects.json";
import Link from "next/link";



export default function Projects() {
  function shortenUrl(url) {
    if (url.length > 10) {
        return url.substring(0, 20) + "...";
        }
    }
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-2 items-center mt-4">
          {projects.data.map((item, index) => (
            <Link key={index} href={item.url} target="_blank" className="cursor-pointer w-full bg-zinc-900/90 p-4 rounded-lg hover:bg-zinc-400/20 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200  w-11/12 mx-auto">
              <Image src={item.bg} alt={item.name} width={500} height={500} className="h-32 w-full shadow-lg rounded-lg" />
              <div className="mt-4">
                <p className="font-semibold text-xl">{item.name}</p>
                <p className="text-sm max-h-24 overflow-auto font-normal h-24">{item.text}</p>
              </div>
              <p className="text-xs italic mt-6">
                <i className="fal fa-arrow-up-right-from-square mr-1" />
                {item.name === "Weather App" ? "www.mediafire.com" : shortenUrl(item.url)}
              </p>
            </Link>
          ))}
    </div>
  );
}