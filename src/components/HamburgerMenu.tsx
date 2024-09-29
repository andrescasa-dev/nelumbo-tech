import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./Dialog";
import NavLink from "./NavLink";

interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
}

interface HamburgerMenuProps {
  navigation: NavItem[];
  children: ReactNode;
}

function HamburgerMenu({ navigation, children }: HamburgerMenuProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        title="navegación"
        description=""
        className="md:p-4 pl-0 w-screen h-screen p-7 md:max-w-screen-xl mx-auto md:hidden bg-white"
      >
        <ul className="flex flex-col gap-12">
          {navigation.map(({ href, isActive, label }) => (
            <li key={label}>
              <NavLink href={href} isActive={isActive}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

export default HamburgerMenu;
