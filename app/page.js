import Image from 'next/image'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import Skills from '@/components/Skills/Skills'
import Repos from '@/components/Repos/Repos'
import Projects from '@/components/Projects/Projects'

export default function Home() {
  return (
    <>

      <Header />

      <div id="skills" className="mt-20" data-aos="fade-right">
        <div id="header" className="relative ml-[8px]">
          <h2 className="text-6xl absolute pointer-events-none absolute left-24 -top-4 z-0 -translate-x-1/2 transform font-bold uppercase text-heading opacity-15 text-white opacity-20">Skills</h2>
          <h2 className="text-3xl font-semibold text-white pt-2 ml-[18px]">Skills</h2>
        </div>
        <div id="body">
          <Skills />
        </div>
      </div>


      <div id="repository" className="mt-28" data-aos="fade-left">
        <div id="title" className="relative">
          <h2 className="text-5xl ml-20 absolute pointer-events-none absolute left-24 -top-4 z-0 -translate-x-1/2 transform font-bold uppercase text-heading opacity-15 text-white opacity-20">Repositories</h2>
          <h2 className="text-3xl font-semibold text-white ml-[18px] -pt-4 ">Repositories</h2>
        </div>
        <div id="body">
          <Repos />
        </div>
      </div>


      <div id="repository" className="mt-28" data-aos="fade-left">
        <div id="title" className="relative">
          <h2 className="text-5xl ml-20 absolute pointer-events-none absolute left-20 -top-4 z-0 -translate-x-1/2 transform font-bold uppercase text-heading opacity-15 text-white opacity-20">Projects</h2>
          <h2 className="text-3xl font-semibold text-white ml-[18px] -pt-4 ">Projects</h2>
        </div>
        <div id="body">
          <Projects />
        </div>
      </div>

    </>

  )
}
