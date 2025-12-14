//문제 1번

function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

console.log(getFirstElement([1, 2, 3])) //1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined

//문제 2번

function isNumberArray(array: number[] | string[] | undefined):boolean {
  if (!array || array.length === 0) {
      return true;
    }
    // 첫 번째 요소가 숫자인지 체크
    return typeof array[0] === 'number';
  }

console.log(isNumberArray([1, 2, 3])); //true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)


//문제 3번

function isArray2<T>(value: T | T[]): boolean {
  return Array.isArray(value);
  }
  console.log(isArray2([1, 2, 3])); // true
  console.log(isArray2(["a", "b", "c"])); // true
  console.log(isArray2('a')); // false
  console.log(isArray2(1)); // false
  
//문제 4번
type WithDefault<T> = {
  [K in keyof T]:[T[K], T[K]]
}
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }

//문제 5번
function pluck<T, K extends keyof T>(array:T[], key:K):T[K][] {
  return array.map(item => item[key]);
}    

const users = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'}
];

console.log(pluck(users, 'id'));
console.log(pluck(users, 'name'));