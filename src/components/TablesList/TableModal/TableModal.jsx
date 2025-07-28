import UniversalModal from "../../UniversalModal/UniversalModal";
import DateFilterSelect from "./DateFilterSelect/DateFilterSelect";
import useFilteredModalTable from "../../../hooks/useFilteredModalTable";
import BookingList from "./BookingList/BookingList";

function TableModal({ open, onClose,  table = {} }) {
 
  const { number, bookingDate } = table;
  const { filteredOrders, selectedDate, setSelectedDate } = useFilteredModalTable(bookingDate,number);
  

  return (
    <UniversalModal open={open} onClose={onClose} title={`Стол №${number}`} onSubmit={onClose} submitLabel="Закрыть">
      <DateFilterSelect selectedDate={selectedDate} onChange={setSelectedDate} />
      <BookingList bookings={filteredOrders} />
    </UniversalModal>
  );
}

export default TableModal;
