import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logotipo from "@/public/logotipo.png";

export function Header() {
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
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Soluções
          </Link>
          <Link
            href="#testimonials"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Resultados
          </Link>
          <Link
            href="#about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Sobre
          </Link>
        </div>

        <Button>Falar com Especialista</Button>
      </nav>
    </header>
  );
}
