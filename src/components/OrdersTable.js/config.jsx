import { createColumnHelper } from "@tanstack/react-table";
import dayjs from "dayjs";
import EditableDateCell from "../EditableDateCell/EditableDateCell";
import OrdersAction from "./OrdersAction/OrdersAction";
import SwitchStatus from "./SwitchStatus/SwitchStatus";
const columnHelper = createColumnHelper();

export const getColumns = (
  onEdit,
  onDelete,
  handleStatusChange,
  handleDateChange,
  tables 
) => {


  console.log(tables);

  const tablesMap = new Map();
  tables?.forEach((table) => tablesMap.set(table._id, table));

  return [
    columnHelper.accessor("date", {
      header: "Дата брони",
      cell: ({ row }) => (
        <EditableDateCell
          initialValue={row.original.date}
          id={row.original._id}
          onChange={handleDateChange}
        />
      ),
    }),
    columnHelper.accessor("name", {
      header: "Имя",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("notes", {
      header: "Заметки",
      cell: (info) => info.getValue() || "-",
    }),
    columnHelper.accessor("phone", {
      header: "Телефон",
      cell: (info) => info.getValue() || "-",
    }),
    columnHelper.accessor("createdAt", {
      header: "Создано",
      cell: (info) => dayjs(info.getValue()).format("DD.MM.YYYY HH:mm"),
    }),
    columnHelper.accessor("table", {
      header: "Стол",
      cell: (info) => {
        const tableId = info.getValue();
        const table = tablesMap.get(tableId);
        return table ? `Стол №${table.number}` : "-";
      },
    }),
    columnHelper.accessor("status", {
      header: "Изменить статус",
      cell: ({ row, getValue }) => (
        <SwitchStatus row={row} handleStatusChange={handleStatusChange} getValue={getValue} />
      ),
    }),
    columnHelper.display({
      id: "actions",
      header: "Действия",
      cell: ({ row }) => <OrdersAction onDelete={onDelete} onEdit={onEdit} row={row} />,
    }),
  ];
};
