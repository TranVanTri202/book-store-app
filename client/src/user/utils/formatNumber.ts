// chuyển tiền về dạng VND (60000 => 60.000 đ)
export const formatNumber = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};
