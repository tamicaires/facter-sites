export enum Urls {
  Facter = "https://www.facter.com.br/",
  CTrodrigoargentino = "https://www.ctrodrigoargentino.com.br/",
  Uniaosiqueira = "https://www.uniaosiqueira.com.br/",
  WhatsappBase = "https://wa.me/5599985201824"
}

export const getWhatsappUrl = (message: string) =>
  `${Urls.WhatsappBase}?text=${encodeURIComponent(message)}`;
