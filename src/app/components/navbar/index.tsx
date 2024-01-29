import Link from "next/link";
import Button from "../button";

const Navbar = (): JSX.Element => {
    return (
        <header className="flex justify-between p-10 bg-amber-100">
            <figure className="w-10">
                <img src="/images/iconcat.png" alt="patinhas" />
            </figure>

            <nav>
                <ul className="list-none flex">
                    <li className="">
                        <Button><Link href="/">Sign in</Link></Button>
                    </li>
                    <li className="p-4">
                        <Link href="/about">Sign up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

