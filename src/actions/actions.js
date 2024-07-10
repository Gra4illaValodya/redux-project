export const dec = () => ({ type: "DEC" });
export const inc = () => ({ type: "INC" });
export const rnd = () => {
  const value = Math.floor(Math.random() * 100 + 1);
  return { type: "RND", payload: value };
};
