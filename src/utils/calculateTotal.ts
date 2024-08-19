const calculateTotal = (itemPrices: number[]): number => {
  return itemPrices.reduce((acc, price) => acc + price, 0);
};

export default calculateTotal;
