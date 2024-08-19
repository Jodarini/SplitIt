const calculateTotal = (
  itemPrices: number[],
  tax: number,
  tip: number,
): { total: number; taxTotal: number; tipTotal: number } => {
  const itemsTotal = itemPrices.reduce((acc, price) => acc + price, 0);
  const taxTotal = calculateTax(itemsTotal, tax);
  const tipTotal = calculateTip(itemsTotal, tip);
  return { total: itemsTotal + taxTotal + tipTotal, taxTotal, tipTotal };
};

const calculateTax = (itemsTotal: number, tax: number): number => {
  const itemsWithTaxTotal = itemsTotal * (1 + tax / 100);
  return itemsWithTaxTotal - itemsTotal;
};

const calculateTip = (itemsTotal: number, tip: number): number => {
  const itemsWithTipTotal = itemsTotal * (1 + tip / 100);

  return itemsWithTipTotal - itemsTotal;
};

export default calculateTotal;
