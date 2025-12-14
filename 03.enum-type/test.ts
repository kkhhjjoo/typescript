//1번 문제
interface User3  {
  id: number;
  name: string;
  email?: string;
}


const user2:User3 = {
  id: 1,
  name: 'Alice'
}

const userWithEmail:User3 = {
  id: 2,
  name: 'Bob',
  email: 'bob@example.com'
}
//2번 문제
type TUser = {
  id: number;
  name: string;
  address: Address;
}

type Address = {
  city: string;
  zipCode: number;
}
const user3: TUser = {
  id: 1,
  name: 'Alice',
  address: {
    city: 'Seoul',
    zipCode: 12345
  }
}

//3번 문제
interface User4 {
  id: number;
  name: string;
  email?: string;
}

interface Admin extends User4{
  role: string;
}

const normalUser: User4 = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
}

const adminUser = {
  id: 2,
  name: 'Bob',
  role: 'Administrator'
}

//문제 4번
type Product2 = {
  id: number;
  name: string;
  price: number;
}

interface DiscountedProduct extends Product2 {
  discount: number;
}

const normalProduct:Product2 = {
  id: 1,
  name: 'Laptop',
  price: 1000
}

const discountedProduct:DiscountedProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};

//문제 5번
type Product5 = {
  id: number;
  name: string;
  price: number;
}

type Order = {
  orderId: number;
  products: Product5[];
  totalPrice: number;
}

const order:Order = {
  orderId: 101,
  products: [
    {id: 1, name: 'Laptop', price: 1000},
    {id: 2, name: 'Mouse', price: 50}
  ],
  totalPrice: 1050
}

//6번 문제

interface BaseUser {
  id: number;
  name: string;
}

interface AdminUser extends BaseUser {
  role: string;
}

type GuestUser = BaseUser & {
  visitCount: number;
}

const admin: AdminUser = {
  id: 1,
  name: 'Alice',
  role: 'Administrator'
}

const guest: GuestUser = {
  id: 2,
  name: 'Bob',
  visitCount: 5
}