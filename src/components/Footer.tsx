import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import IconButton from "./IconButton";
import Logo from "./Logo";
import HappyFace from "./icons/HappyFace";
import Send from "./icons/Send";

const socialNetworks = [
  {
    href: "#",
    label: "facebook",
    Icon: Facebook,
  },
  {
    href: "#",
    label: "instagram",
    Icon: Instagram,
  },
  {
    href: "#",
    label: "linkedin",
    Icon: Linkedin,
  },
  {
    href: "#",
    label: "whatsapp",
    Icon: Phone,
  },
];

function Footer() {
  return (
    <footer className="bg-secondary-400">
      <div className="mx-auto grid max-w-screen-xl gap-y-7 bg-secondary-400 px-4 py-8 min-[750px]:grid-cols-2 lg:grid-cols-4">
        <form className="flex flex-col lg:col-span-2">
          <h2 className="mb-1 text-sm font-bold uppercase tracking-tight text-primary-500 xl:mb-0 xl:text-xl">
            ofertas y promociones
          </h2>
          <label
            className="text-2xl font-extrabold xl:text-4xl"
            htmlFor="sendEmail "
          >
            No te pierdas nuestras ofertas!
          </label>
          <div className="flex items-center border-b-[2.5px] border-foreground-500">
            <input
              className="grow bg-transparent py-4 text-sm placeholder:text-foreground-400 xl:py-6 xl:text-lg"
              id="sendEmail"
              placeholder="Tu dirección de correo electrónico"
            />
            <IconButton variant="ghost">
              <Send className="size-8 fill-primary-200 text-primary-200 xl:size-10" />
            </IconButton>
          </div>
        </form>
        <div className="hidden grow items-center justify-center lg:row-span-2 lg:flex">
          <HappyFace className="size-40 fill-primary-200 md:size-24" />
        </div>
        <section className="flex flex-col items-center justify-center gap-2 lg:row-span-1 lg:gap-4">
          <h2 className="text-2xl font-extrabold xl:text-4xl">Conversemos!</h2>
          <p className="text-sm text-foreground-400">
            Loren ipsum dolor sit amet
          </p>
          <ul className="flex gap-2">
            {socialNetworks.map(({ Icon, href, label }) => (
              <li key={label}>
                <a href={href} aria-label={label}>
                  <Icon className="size-8 text-foreground-500" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col items-center justify-between gap-y-2 min-[750px]:col-span-2 min-[750px]:flex-row min-[750px]:justify-start min-[750px]:gap-6 lg:col-span-2">
          <div className="flex w-full max-w-64 justify-center rounded-lg bg-primary-400 px-2 py-3">
            <Logo />
          </div>
          <div className="grid grid-cols-2">
            <a className="p-2 px-0 text-sm" href="#">
              Envíos y devoluciones
            </a>
            <a className="p-2 px-0 text-sm" href="#">
              Aviso de privacidad
            </a>
            <a className="p-2 px-0 text-sm" href="#">
              Preguntas Frecuentes
            </a>
            <a className="p-2 px-0 text-sm" href="#">
              Términos y condiciones
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
