export const SITE = {
  name: "BIP-MOBILE",
  slogan: "Профессионализм, индивидуализм, надёжность.",
  description:
    "Станция технического обслуживания. Ремонт легковых автомобилей и микроавтобусов.",
  phone: "+375 29 599-01-69",
  phoneHref: "tel:+375295990169",
  email: "lihomans@mail.ru",
  address: "г. Витебск, ул. Ломоносова 6, корп. 3",
  coordinates: { lat: 55.179106, lng: 30.182915 },
  url: "https://car-service-steel.vercel.app/",
  foundedYear: 2015,
} as const;

export const SOCIAL = {
  viber: "viber://chat?number=%2B375295990169",
  whatsapp: "https://wa.me/375295990169",
  instagram: "https://www.instagram.com/bip.mobile",
  yandexMaps: "https://yandex.by/maps/org/bip_mobile/46059145365/",
  yandexReviews: "https://yandex.by/maps/org/bip_mobile/46059145365/reviews/",
  yandexAddReview:
    "https://yandex.by/maps/org/bip_mobile/46059145365/reviews/?add-review=true",
} as const;

export const SCHEDULE = {
  weekdays: "Пн-Пт: 08:00-19:00",
  lunch: "Обед: 13:00-14:00",
  weekends: "Сб-Вс: выходной",
} as const;

export const NAV_ITEMS = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#advantages" },
  { label: "Как мы работаем", href: "#workflow" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
] as const;
