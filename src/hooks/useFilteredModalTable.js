import { useState, useMemo } from "react";
import { parseISO, addDays } from "date-fns";

export default function useFilteredModalTable(bookingDate, tableNumber) {

  const orders = useMemo(() => {
    if (!bookingDate) return [];
    return bookingDate.map((el) => ({
      _id: el._id,
      date: el.date,
      phone: el.phone,
      name: el.name,
      table: tableNumber,
      status: "all",
    }));
  }, [bookingDate, tableNumber]);


  const [selectedDate, setSelectedDate] = useState("all");


  const filteredOrders = useMemo(() => {
    if (selectedDate === "all") return orders;

    const selDate = parseISO(selectedDate + "T00:00:00");
    const nextDay = addDays(selDate, 1);
    return orders.filter((order) => {
      const orderDate =
        typeof order.date === "string" ? parseISO(order.date) : order.date;
      return orderDate >= selDate && orderDate < nextDay;
    });
  }, [orders, selectedDate]);

  return { filteredOrders, selectedDate, setSelectedDate };
}
