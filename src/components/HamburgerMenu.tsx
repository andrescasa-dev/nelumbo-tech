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
        className="mx-auto h-screen w-screen bg-white p-7 pl-0 md:hidden md:max-w-screen-xl md:p-4"
      >
        <ul className="flex flex-col gap-12 p-12">
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
