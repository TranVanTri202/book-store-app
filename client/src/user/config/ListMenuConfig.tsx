interface ListMenuProps {
  category: { [key: string]: string };
  price: { [key: string]: string };
}

const ListMenu: ListMenuProps = {
  category: {
    sachthieunhi: "Sách Thiếu Nhi",
    sachtamlitinhcam: "Sách Tâm Lí, Tình Cảm",
    sachvientuong: "Sách Khoa Học Viễn Tưởng",
    sachcamhung: "Sách Truyển Cảm Hứng",
  },
  price: {
    "20to50": "20.000đ - 50.000đ",
    "50to100": "50.000đ - 100.000đ",
    "100to200": "100.000đ - 200.000đ",
  },
};

export default ListMenu;
