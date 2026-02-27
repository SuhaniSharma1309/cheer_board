// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// export default function Navbar() {
//   const pathname = usePathname()

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Messages", href: "/messages" },
//     { name: "About", href: "/about" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
//       <div className="flex items-center gap-8 px-8 py-3 rounded-full 
//         bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">

//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/logo.jpg"
//             alt="Logo"
//             width={28}
//             height={28}
//             className="rounded-full"
//           />
//           <span className="text-white font-semibold">CheerBoard</span>
//         </Link>

//         {/* Nav Links */}
//         <div className="flex gap-6">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`px-4 py-1.5 rounded-full text-sm transition-all duration-300
//               ${
//                 pathname === link.href
//                   ? "bg-white/20 text-white"
//                   : "text-white/70 hover:text-white hover:bg-white/10"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }