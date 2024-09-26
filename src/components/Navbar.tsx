import { ShoppingCart } from "lucide-react";
import Button from "./Button";
import IconButton from "./IconButton";
import Logo from "./Logo";

function Navbar() {
  return (
    <header className="bg-gradient-to-b from-primary-200 to-primary-300 p-8">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="flex gap-2 items-center">
          <Button variant="primary"> Crea tu cuenta</Button>
          <Button variant="ghost"> Iniciar sesión</Button>
          <IconButton>
            <ShoppingCart className="size-8" />
          </IconButton>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
