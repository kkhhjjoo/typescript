type TProduct = {
  id: string;
  name: string;
  price: number;
  discount?: number;
}

type Item = {
  sku: string;
  name: string;
}

type TDiscountProduct = TProduct & { discountRatio: number };

interface IProduct {
  id: string;
  name: string;
  price: number;
}

interface IDiscountProduct extends IProduct {
  discountRatio: number;
}