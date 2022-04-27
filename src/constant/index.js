// toastify

export const toastOptions = {
  position: "top-left",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

// framer motion

export const containerVariants = {
  hidden: { opacity: 0, y: "100vh" },
  visible: { opacity: 1, y: "0" },
};
export const titleVariants = {
  hover: { scale: 1.3 },
  spring_effect: { type: "spring", stiffness: 500 },
};
