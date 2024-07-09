export const INC = () => ({ type: "INC" });
export const DEC = () => ({ type: "DEC" });
export const RND = () => ({
  type: "RND",
  payload: Math.floor(Math.random() * 7 + 1),
});
