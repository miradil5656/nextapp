//BiGridAlt
import Link from "next/link";
import { BiGridAlt } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center md:px-16 md:py-12 p-8">
        <h1 className="text-3xl">Logo</h1>
        <ul className="hidden text-xl md:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/user">User</Link>
            <Link href="/contact">Contact</Link>
        </ul>
        <BiGridAlt className="text-3xl md:hidden"/>
    </div>
  )
}

export default Navbar