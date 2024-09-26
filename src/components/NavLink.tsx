import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

export const navLinkVariants = cva("text-base", {
  variants: {
    variant: {
      inactive: "text-neutral-600 relative hover:text-neutral-900",
      active:
        "text-primary-500 font-bold after:absolute after:content-[''] after:left-[50%] after:bottom-0 after:w-[20%] after:h-[1.7px] after:-translate-x-1/2 after:bg-secondary-400",
    },
  },
  defaultVariants: {
    variant: "inactive",
  },
});

interface NavLinkProps extends VariantProps<typeof navLinkVariants> {
  href: string;
  isActive?: boolean;
  children: string;
  className?: string;
}

function NavLink({ href, isActive, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        navLinkVariants(),
        isActive && navLinkVariants({ variant: "active" }),
        className,
      )}
    >
      {children}
    </Link>
  );
}

export default NavLink;
