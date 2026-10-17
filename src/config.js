// Brand and contact details used across the site. Fill these in; empty values are hidden or fall back to '#'.
export const brand = {
  name: 'Kadz Tech',
  tagline: 'B2B logistics a few clicks away',
  announcement: '', // text for the bar above the header; hidden when empty
  phone: '',
  whatsapp: '', // international format without +, e.g. 9665XXXXXXXX
  email: '',
  address: '',
  signUpUrl: '/contact',
  social: {
    x: '',
    linkedin: '',
    instagram: '',
    tiktok: '',
  },
  appStoreUrl: '',
  playStoreUrl: '',
}

export const whatsappLink = brand.whatsapp ? `https://wa.me/${brand.whatsapp}` : '#contact'
