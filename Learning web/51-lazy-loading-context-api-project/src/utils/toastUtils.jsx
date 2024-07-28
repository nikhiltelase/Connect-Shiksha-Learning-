import { toast } from "react-toastify";

export const showToast = (message, type = "success") => {
  const toastOptions = {
    position: "bottom-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  if (type === "success") {
    toast.success(message, toastOptions);
  } else if (type === "error") {
    toast.error(message, toastOptions);
  } else {
    toast(message, toastOptions); // Default toast for other types
  }
};
