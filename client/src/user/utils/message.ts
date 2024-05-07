import { message } from "antd";

// show thông báo toast
export const showMessage = (
  type: "success" | "error" | "warning",
  content: string
) => {
  const messageAPi = message[type];
  messageAPi(content);
};
