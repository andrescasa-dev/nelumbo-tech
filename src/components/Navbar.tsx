import { cn } from "@/utils/utilsClient";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./Button";
import HamburgerMenu from "./HamburgerMenu";
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
    <header className="mb-8">
      <nav className="shadow-[0px_5px_6px_#00000029] ">
        <div className="bg-gradient-to-b from-primary-200 to-primary-300 py-5 px-4">
          <div className="flex justify-between items-center max-w-screen-xl mx-auto">
            <HamburgerMenu navigation={navigation}>
              <IconButton className="md:hidden">
                <Menu className="size-6 md:size-8" />
              </IconButton>
            </HamburgerMenu>
            <Link href="#" aria-label="Logo de macro pay">
              <Logo className="w-[150px] md:w-auto" />
            </Link>
            <div className="flex gap-2 items-center">
              <Link
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "hidden md:flex",
                )}
                href="#"
              >
                Crea tu cuenta
              </Link>
              <Link
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "hidden md:flex",
                )}
                href="#"
              >
                Iniciar sesión
              </Link>
              <IconButton aria-label="abrir el carrito de compras">
                <ShoppingCart className="size-6 md:size-8" />
              </IconButton>
            </div>
          </div>
        </div>
        <ul className="md:flex gap-12 p-4 px-4 max-w-screen-xl mx-auto hidden ">
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
