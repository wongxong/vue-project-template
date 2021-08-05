import { Message, MessageBox } from "element-ui";

export function globalErrorMessage(error) {
  if (typeof error === "string") {
    error = { error };
  }

  return Message({
    message: error.message,
    type: "error",
    duration: 5 * 1000
  });
}

export function globalSuccessMessage(message) {
  return Message({
    message,
    type: "success",
    duration: 5 * 1000
  });
}

export function globalConfirm(message, options) {
  return MessageBox.confirm(
    message,
    Object.assign(
      {
        title: "确认框",
        cancelButtonClass: "el-button--primary",
        confirmButtonClass: "el-button--danger"
      },
      options
    )
  );
}