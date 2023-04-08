import { normalizeConfig } from "next/dist/server/config"
import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
  return (
    <nav className="bg-slate-300 p-4 flex justify-between flex-col
    md:flex-row sticky top-0 drop-shadow-xl">
        <h1 className="text-3xl font-bold text-blue-400 
        grid place-content-center md:mb-0">
        <Link href='/'>WikiRoket!</Link>
        </h1>
        <Search/>
        </nav>
  )
}
