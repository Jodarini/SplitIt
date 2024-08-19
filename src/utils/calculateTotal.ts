const calculateTotal = (itemPrices: number[]): number => {
  return itemPrices.reduce((acc, price) => acc + price, 0);
};
// const calculateTotal = () => {
//   return props.owner.items.reduce((acc, item) => acc + item.price, 0);
// };

export default calculateTotal;
