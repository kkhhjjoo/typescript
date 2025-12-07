interface Product { 
  img: string;
  name: string;
  description: string;

}

interface SalesProduct extends Product {
  discountPercent: number
}
type ApiResponse = {
  products: Product[],
  salesProducts: SalesProduct[]
}

const apiResponse: ApiResponse = {
  products: [
    {img: "pants.png", name: "나팔바지", description: "24년신상"},
    {img: "shirts.png", name: "셔츠", description: "24년신상"}
  ],
  salesProducts: [
    {img:"jacket.png", name: "자켓", description: "시즌상품", discountPercent: 20},
    {img:"cap.png", name: "모자", description: "시즌상품", discountPercent: 10},
  ]
}


apiResponse.map(item =>item.discountPercent);