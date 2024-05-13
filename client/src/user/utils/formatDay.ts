export const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Thêm số 0 phía trước nếu ngày hoặc tháng chỉ có một chữ số
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Trả về chuỗi ngày tháng năm được định dạng: dd/MM/yyyy
  return `${formattedDay}/${formattedMonth}/${year}`;
};
