//문제 1번

type Product = {
  id: number;
  name: string;
  price: number;
}

type Discount = {
  discountPercentage: number;
}

function calculateDiscountedPrice(item: Product & Discount): number {
  return discountProduct.price - (discountProduct.price * discountProduct.discountPercentage*0.01);
}

const discountProduct: Product & Discount = {
  id: 101,
  name: 'Laptop',
  price: 1000,
  discountPercentage: 20
}

console.log(calculateDiscountedPrice(discountProduct)); //800

//문제 2번

type ContactInfo = {
  phone: string;
  address: string;
}

type OrderInfo = {
  orderId: number;
  items: string[];
}

function printOrderSummary(order: ContactInfo & OrderInfo): string {
  return (`Order ${order.orderId} (Phone: ${order.phone})`)
}

const orderDetails: ContactInfo & OrderInfo = {
  phone: '123-456-7890',
  address: '123 Main St',
  orderId: 2023,
  items: ['Laptop', 'Mouse']
}

console.log(printOrderSummary(orderDetails)); //Order 2023 (Phone: 123-456-7890)

//문제 3번
type Profile = {
  id: number;
  name: string;
  email: string;
}

type Activity = {
  lastLogin: Date;
  actions: string[];
}

function mergeUserData(profile: Profile, activity: Activity): Profile& Activity {
  return {...profile, ...activity}
}

function getUserSummary(user: Profile & Activity): string {
  return `사용자 ${user.id} - ${user.name} (${user.email}) - 마지막 로그인: ${user.lastLogin}`
}

const profile = { id: 1, name: 'Alice', email: 'alice@example.com' }
const activity = {
  lastLogin: new Date('2024-01-01T10:00:00Z'),
  actions: ['login', 'viewed dashboard', 'logout']
}

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser)); //출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"