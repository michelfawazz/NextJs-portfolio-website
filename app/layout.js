import './globals.css'
import { Inter } from 'next/font/google'


import NavBar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michel Portfolio Website',
  description: 'Michel\'s  portfolio website',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="w-full h-full transition-all duration-300 max-w-screen-lg mx-auto overflow-hidden">

          <NavBar />


          {children}

          <Footer />

        </div>


      </body>
    </html>
  )
}
