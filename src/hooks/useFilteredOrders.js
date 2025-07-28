import { useMemo, useState } from "react";
import isSameDay from "date-fns/isSameDay";
import isThisWeek from "date-fns/isThisWeek";
import isTomorrow from "date-fns/isTomorrow";
import parseISO from 'date-fns/parseISO';

export default function useFilteredOrders(orders) {
  const [filter, setFilter] = useState({
    date: "all",      
    status: "all",    
    table: "all",        
  });

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
       const orderDate = typeof order.date === 'string' ? parseISO(order.date) : order.date;
      

      const matchDate =
        filter.date === "all" ||
        (filter.date === "today" && isSameDay(orderDate, new Date())) ||
        (filter.date === "tomorrow" && isTomorrow(orderDate)) ||
        (filter.date === "week" && isThisWeek(orderDate));

      const matchStatus =
        filter.status === "all" || order.status === filter.status;

      const matchTable =
        filter.table  === "all" || order.table === filter.table;

      return matchDate && matchStatus && matchTable;
    });
  }, [orders, filter]);

  return { filteredOrders, filter, setFilter };
}
