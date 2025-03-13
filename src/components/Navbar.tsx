import Link from "next/link";
import Search from "./Search";

function Navbar() {
  return (
    <div className="py-6 bg-orange-400 container px-10 mx-auto">
      <Link href={"/"}>
        <h2 className="text-2xl text-white">Logo</h2>
      </Link>
      <Search />
    </div>
  );
}

export default Navbar;
