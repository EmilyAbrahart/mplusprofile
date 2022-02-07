export const flex = (direction, justify, align, wrap = "wrap") => {
  return `
      display: flex;
      flex-wrap: ${wrap};
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
  `;
};
