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
  handleDateChange
) => [
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
    cell: (info) => info.getValue() || "-",
  }),

  columnHelper.accessor("status", {
    header: "Изменить статус",
    cell: ({ row, getValue }) => (
      <SwitchStatus row={row} handleStatusChange={handleStatusChange} getValue={getValue}/>
    )
  }),
  columnHelper.display({
    id: "actions",
    header: "Действия",
    cell: ({ row }) => (
      <OrdersAction onDelete={onDelete} onEdit={onEdit} row={row} />
    ),
  }),
];
