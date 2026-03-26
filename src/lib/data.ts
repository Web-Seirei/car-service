import type { LucideIcon } from "lucide-react";
import {
  Car,
  CheckCircle,
  Circle,
  CircleDot,
  Cog,
  CreditCard,
  Disc3,
  Droplets,
  Flame,
  Gauge,
  Handshake,
  MessageSquare,
  Receipt,
  Search,
  Settings2,
  Shield,
  ShieldCheck,
  Timer,
  UserCheck,
  Users,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  price: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Диагностика и ремонт подвески",
    description:
      "Выявление стуков, замена подшипников, шаровых, рычагов, амортизаторов, пружин, сайлентблоков.",
    price: "от 30",
    icon: CircleDot,
  },
  {
    title: "Ремонт двигателя (ДВС)",
    description: "Диагностика и ремонт двигателя, ремонт ГБЦ, устранение неисправностей.",
    price: "от 80",
    icon: Cog,
  },
  {
    title: "Обслуживание тормозной системы",
    description:
      "Замена колодок, дисков, жидкости. Диагностика и регулировка стояночного тормоза.",
    price: "от 40",
    icon: Disc3,
  },
  {
    title: "Замена систем ГРМ",
    description: "Замена ремня/цепи ГРМ, роликов, натяжителей. Точная выставка меток.",
    price: "от 60",
    icon: Timer,
  },
  {
    title: "Замена масла и технических жидкостей",
    description:
      "Замена моторного масла, масляного, воздушного, салонного фильтров, антифриза, тормозной жидкости.",
    price: "от 25",
    icon: Droplets,
  },
  {
    title: "Рулевое управление",
    description:
      "Замена наконечников, тяг, рулевой рейки. Проверка на люфты и герметичность ГУР.",
    price: "от 50",
    icon: Gauge,
  },
  {
    title: "Трансмиссия",
    description: "Замена сцепления, маховика, КПП, карданных валов, ШРУСов, приводов.",
    price: "от 80",
    icon: Settings2,
  },
  {
    title: "Шиномонтаж",
    description: "Сезонная замена шин, балансировка колёс, ремонт проколов.",
    price: "от 20",
    icon: Circle,
  },
  {
    title: "Ремонт глушителей",
    description: "Диагностика, сварка, замена элементов выхлопной системы.",
    price: "от 30",
    icon: Flame,
  },
  {
    title: "Антикоррозийная обработка",
    description: "Защита кузова и скрытых полостей от коррозии.",
    price: "от 50",
    icon: Shield,
  },
];

export interface Advantage {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const advantages: Advantage[] = [
  {
    title: "Индивидуальный подход",
    description:
      "Подходим к каждой неисправности индивидуально, выделяя необходимое время на диагностику и ремонт.",
    icon: UserCheck,
  },
  {
    title: "Прозрачные цены",
    description:
      "Объясняем причину неисправности доступным языком и согласуем стоимость до начала работ.",
    icon: Receipt,
  },
  {
    title: "Гарантия на работы",
    description:
      "Предоставляем гарантию на все выполненные работы. Уверены в качестве - отвечаем за результат.",
    icon: ShieldCheck,
  },
  {
    title: "Все марки авто",
    description:
      "Работаем с практически всеми отечественными и зарубежными марками легковых авто и микроавтобусов.",
    icon: Car,
  },
  {
    title: "Опытные мастера",
    description: "Команда специалистов с многолетним стажем. Работаем с 2015 года.",
    icon: Users,
  },
  {
    title: "Удобные способы оплаты",
    description: "Принимаем наличные, банковские карты и безналичный расчёт.",
    icon: CreditCard,
  },
];

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "Оставляете заявку",
    description:
      "Позвоните, напишите в мессенджер или оставьте заявку на сайте. Мы свяжемся с вами в течение 30 минут.",
    icon: MessageSquare,
  },
  {
    step: 2,
    title: "Диагностика",
    description:
      "Проводим осмотр автомобиля, определяем причину неисправности и составляем перечень необходимых работ.",
    icon: Search,
  },
  {
    step: 3,
    title: "Согласование",
    description:
      "Озвучиваем стоимость и сроки ремонта. Работы начинаются только после вашего подтверждения.",
    icon: Handshake,
  },
  {
    step: 4,
    title: "Ремонт и выдача",
    description:
      "Выполняем работы качественно и в срок. Выдаём автомобиль с пояснением выполненных работ и рекомендациями.",
    icon: CheckCircle,
  },
];

export interface Review {
  name: string;
  text: string;
  rating: number;
  date: string;
}

export const reviews: Review[] = [
  {
    name: "Lazy Pavlik",
    text: "Был тут пару раз, пригонял свою ласточку. Мальцы знают толк в своей работе, всегда подскажут, помогут. Многие жалуются на то, что сложно отыскать. Я нашёл без особых усилий. В общем, рекомендую посетить данную станцию!",
    rating: 5,
    date: "5 марта 2026",
  },
  {
    name: "Павел К.",
    text: "Очень грамотные специалисты. Работают оперативно. Цены - адекватные.",
    rating: 5,
    date: "31 марта 2025",
  },
  {
    name: "Павел Шостак",
    text: "Антикор просто супер!",
    rating: 5,
    date: "26 апреля 2025",
  },
  {
    name: "Владимир Т.",
    text: "Все супергуд",
    rating: 5,
    date: "18 апреля 2025",
  },
  {
    name: "Олег С.",
    text: "Отличный сервис. Грамотные специалисты. 👍",
    rating: 5,
    date: "20 февраля 2025",
  },
];
