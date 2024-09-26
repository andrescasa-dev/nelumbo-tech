import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./Button";
import IconButton from "./IconButton";
import Logo from "./Logo";
import NavLink from "./NavLink";

const navigation = [
  { href: "/", label: "Home" },
  { href: "#", label: "Celulares", isActive: true },
  { href: "#", label: "Motocicletas" },
  { href: "#", label: "Tus préstamos" },
  { href: "#", label: "Tiendas" },
  { href: "#", label: "Tracking" },
  { href: "#", label: "Club Macropay" },
];

function Navbar() {
  return (
    <header>
      <nav className="shadow-[0px_5px_6px_#00000029]">
        <div className="bg-gradient-to-b from-primary-200 to-primary-300 py-5">
          <div className="flex justify-between items-center max-w-screen-3xl mx-auto">
            <Link href="#" aria-label="Logo de macro pay">
              <Logo />
            </Link>
            <div className="flex gap-2 items-center">
              <Link className={buttonVariants({ variant: "primary" })} href="#">
                Crea tu cuenta
              </Link>
              <Link className={buttonVariants({ variant: "ghost" })} href="#">
                Iniciar sesión
              </Link>
              <IconButton aria-label="abrir el carrito de compras">
                <ShoppingCart className="size-8" />
              </IconButton>
            </div>
          </div>
        </div>
        <ul className="flex gap-12 p-4 pl-0 max-w-screen-3xl mx-auto">
          {navigation.map(({ href, isActive, label }) => (
            <li key={label}>
              <NavLink href={href} isActive={isActive}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
