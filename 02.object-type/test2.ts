type User = {
  name: string;
  age?: number;
  isAdmin: boolean;
}


let user:User = {
  name: 'Alice',
  isAdmin: true,
};

user = {
  name: 'Bob',
  age: 40,
  isAdmin: false
}

type Numbers = readonly number[];
// numbers:Number.push(4);
// numbers:Number[0] = 42;
const numbers: Numbers = [1, 2, 3];

const products: [string, number, boolean][] = [
  ['Laptop', 1000, true],
  ['Shoes', 50, false],
  ['Book', 20, false]
];

//1. 상품 이름과 가격만 반환, 리턴타입 정의 필요
function getProductNamesAndPrices(
  products: [string, number, boolean][]
) { 
  return products.map(product => [product[0], product[1]]);
}
console.log(getProductNamesAndPrices(products));
//2. 재고가 있는 상품만 반환, 리턴타입 정의 필요
function getAvailableProducts2(
  products: [string, number, boolean][]
) {
  return products.filter(product => product[2] === true);
}
console.log(getAvailableProducts(products));


type User2 = {
  name: string;
  age?: number;
}
// 나이가 제공되지 않으면 18로 설정


function updateUser(user: User2):User2 { 
  return {...user, age: user.age?? 18};
}

console.log(updateUser({ name: 'Charlie' }));
console.log(updateUser({ name: 'Dana', age: 25 }));

//5번 문제

type ProductType = {
  name: string;
  price: number;
  category?: string;
}
type Product = ProductType[];

const products2:Product = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Shoes', price: 50, category: 'Fashion' },
  { name: 'Book', price: 20}
]

function getProductsByCategory(category: string):string[] {
  return products2.filter(product => product.category === category).map(product => product.name);
}

console.log(getProductsByCategory('Electronics')); //['Laptop']
console.log(getProductsByCategory('Fashion')); //['Shoes']
console.log(getProductsByCategory('Books')); //[]