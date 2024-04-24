import { message } from "antd";

export const showMessage = (
  type: "success" | "error" | "warning",
  content: string
) => {
  const messageAPi = message[type];
  messageAPi(content);
};
