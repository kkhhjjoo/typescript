var user = {
    name: 'Alice',
    isAdmin: true,
};
user = {
    name: 'Bob',
    age: 40,
    isAdmin: false
};
// numbers:Number.push(4);
// numbers:Number[0] = 42;
var numbers = [1, 2, 3];
var products = [
    ['Laptop', 1000, true],
    ['Shoes', 50, false],
    ['Book', 20, false]
];
//1. 상품 이름과 가격만 반환, 리턴타입 정의 필요
function getProductNamesAndPrices(products) {
    return products.map((product) => [product[0], product[1]]);
}
console.log(getProductNamesAndPrices(products));
//2. 재고가 있는 상품만 반환, 리턴타입 정의 필요
function getAvailableProducts(products) {
    return products.filter((product) => product[2] === true);
}
console.log(getAvailableProducts(products));
