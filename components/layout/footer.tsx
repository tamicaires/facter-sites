import Link from "next/link";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import logotipo from "@/public/logotipo.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            {/* Logo and Description */}
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8">
                  <div className="flex items-center justify-center w-full h-full">
                    <Image
                      src={logotipo || "/placeholder.svg?height=20&width=20"}
                      alt="Facter Sites Logotipo"
                      height={20}
                      width={80}
                    />
                  </div>
                </div>
                <span className="text-lg">
                  <strong>Facter</strong> Sites
                </span>
              </Link>
              <p className="text-sm text-zinc-400 mb-6 max-w-md">
                Convertendo visitantes em clientes por meio de landing pages
                estratégicas e de alta conversão. Soluções digitais que
                realmente funcionam.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Mail className="h-4 w-4 text-[#c1ff00]" />
                  <a
                    href="mailto:contato@factersites.com.br"
                    className="text-sm hover:text-[#c1ff00] transition-colors"
                  >
                    contato@factersites.com.br
                  </a>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Phone className="h-4 w-4 text-[#c1ff00]" />
                  <a
                    href="tel:+5511999999999"
                    className="text-sm hover:text-[#c1ff00] transition-colors"
                  >
                    (99) 98520-1824
                  </a>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <div className="h-1 w-4 bg-[#c1ff00]" />
                  Links Rápidos
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#servicos"
                      className="text-zinc-400 hover:text-[#c1ff00] transition-colors text-sm"
                    >
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#sobre"
                      className="text-zinc-400 hover:text-[#c1ff00] transition-colors text-sm"
                    >
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contato"
                      className="text-zinc-400 hover:text-[#c1ff00] transition-colors text-sm"
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <div className="h-1 w-4 bg-[#c1ff00]" />
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/termos-de-uso"
                      className="text-zinc-400 hover:text-[#c1ff00] transition-colors text-sm"
                    >
                      Termos de Uso
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/politica-de-privacidade"
                      className="text-zinc-400 hover:text-[#c1ff00] transition-colors text-sm"
                    >
                      Política de Privacidade
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 border-t border-zinc-800 text-center">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Facter Sites. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
