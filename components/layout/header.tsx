import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logotipo from "@/public/logotipo.png";
import { getWhatsappUrl } from "@/urls";

export function Header() {
  const menuItems = [
    { title: "Diferenciais", href: "/#diferenciais" },
    { title: "Portifólio", href: "/#portifolio" },
    { title: "Soluções", href: "/#solucoes" },
    { title: "Serviços", href: "/#servicos" },
  ];

  const url = getWhatsappUrl(
    "Olá, gostaria de falar com um especialista sobre as soluções digitais da Facter Sites."
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur bg-transparent">
      <nav className="container flex h-14 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8">
            <div className=" flex items-center justify-center w-full h-full">
              <Image src={logotipo} alt="Facter Sites Logotipo" height={20} />
            </div>
          </div>
          <span className="text-lg">
            <strong>Facter</strong> Sites
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <Link href={url} target="_blank">
          <Button>Falar com Especialista</Button>
        </Link>
      </nav>
    </header>
  );
}
