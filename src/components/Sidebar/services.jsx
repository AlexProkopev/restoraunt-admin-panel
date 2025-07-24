import { BarChart, MenuBook, People, RateReview, Settings, ShoppingCart, TableRestaurant } from "@mui/icons-material";

export const menuItems = [
  { text: "Заказы", icon: <ShoppingCart />, path: "/orders" },
  { text: "Столы", icon: <TableRestaurant />, path: "/tables" },
  { text: "Меню", icon: <MenuBook />, path: "/menu" },
  { text: "Персонал", icon: <People />, path: "/staff" },
  { text: "Отзывы", icon: <RateReview />, path: "/reviews" },
  { text: "Статистика", icon: <BarChart />, path: "/stats" },
  { text: "Настройки", icon: <Settings />, path: "/settings" },
];