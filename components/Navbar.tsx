// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//     return (
//         <nav className="fixed top-0 w-full bg-white shadow-md z-50">
//             <div className="container mx-auto flex items-center justify-between px-4 py-3">
//                 {/* Logo */}
//                 <Link href="/">
//                     <Image src="/MBK-LOGO.svg" alt="Logo" width={130} height={30} />
// #1
//                 </Link>

//                 {/* Menu */}
//                 <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
//                     <li><Link href="/services">SERVICES</Link></li>
//                     <li><Link href="/">OUR WORK</Link></li>
//                     <li><Link href="/about">ABOUT</Link></li>
//                     <li><Link href="/contact">MAGAZINE</Link></li>
//                     <li><Link href="/contact">CONTACT</Link></li>
//                     <li><Link href="/gallery">SHOWROOM</Link></li>
//                 </ul>

//                 {/* Button */}
//                 <Link href="/contact">
//                     style={{ backgroundColor: '#1A6C7A' }}
//                     <button className="text-white px-5 py-2 rounded-md hover:opacity-90 transition">
//                         GET A QUOTE
//                     </button>
//                 </Link>
//             </div>
//         </nav>
//     );
// }

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react"; // hamburger icon

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo and tagline */}
        {/* <div className="flex flex-col items-start">
          <Link href="/">
            <Image src="/MBK-LOGO.svg" alt="MBK Logo" width={60} height={40} />
          </Link>
          <span className="text-xs text-gray-500 mt-1">My Bath & Kitchen</span>
        </div> */}
        <div className="flex flex-col items-center">
<Link href="/">
    <Image src="/MBK-LOGO.svg" alt="MBK Logo" width={80} height={60} />
  </Link>
  <span className="text-xs text-gray-500 mt-1 text-center">My Bath & Kitchen</span>
</div>


        {/* Center Menu */}
        <ul className="hidden lg:flex space-x-8 text-gray-700 text-sm font-medium">
          <li><Link href="/services">SERVICES</Link></li>
          <li><Link href="/our-work">OUR WORK</Link></li>
          <li><Link href="/about">ABOUT</Link></li>
          <li><Link href="/magazine">MAGAZINE</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
          <li><Link href="/showroom">SHOWROOM</Link></li>
        </ul>

        {/* Right Section: Phone + Button + Menu */}
        <div className="flex items-center gap-4">
          {/* Phone Number */}
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-gray-800">+1 888 55</p>
            <p className="text-sm font-medium text-gray-800">MBK 55</p>
          </div>

          {/* Get a Quote Button */}
          <Link href="/contact">
            <button
              className="bg-[#1A6C7A] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:opacity-90 transition"
            >
              GET A <br /> QUOTE
            </button>
          </Link>

          {/* Hamburger Icon */}
          <button className="block lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
