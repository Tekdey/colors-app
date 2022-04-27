export const copyAllColors = (colors) => {
  let clipboard = "";

  for (let i = 0; i < colors.length; i++) {
    clipboard += " " + colors[i];
  }
  return navigator.clipboard.writeText("/* " + clipboard + " */");
};
