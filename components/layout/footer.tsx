import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import logotipo from "@/public/logotipo.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container px-4 md:px-6">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8">
                <div className=" flex items-center justify-center w-full h-full">
                  <Image
                    src={logotipo}
                    alt="Facter Sites Logotipo"
                    height={20}
                  />
                </div>
              </div>
              <span className="text-lg">
                <strong>Facter</strong> Sites
              </span>
            </Link>
            <p className="text-sm text-zinc-400 mb-6">
              Convertendo visitantes em clientes por meio de landing pages
              estratégicas e de alta conversão.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
                >
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
                >
                  Páginas de Vendas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
                >
                  Páginas de Captura
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
                >
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
                >
                  Cases
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-zinc-400 hover:text-[#c1ff00] transition-colors"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-zinc-400">
              © 2025 Facter Sites. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-zinc-400 hover:text-[#c1ff00] transition-colors"
              >
                Termos de Uso
              </Link>
              <Link
                href="#"
                className="text-sm text-zinc-400 hover:text-[#c1ff00] transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
