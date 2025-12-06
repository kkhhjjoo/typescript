interface IStudent { //객체만 가능한 부분
  name: string;
  age?: number;
}

type TStudent = { //원시타입도 가능, 튜플타입
  name: string,
  age?: number

}

type Tuple = [number, string, boolean]

// let b: { readonly name: string, age?: number } = { name: 'noona', age: 34 };
let b: IStudent = { name: 'noona', age: 34 };
let c: { name: string, age: number } = {name: 'noona', age: 23}

console.log(b.name);
// b.name = 'coding';

let fruits: string[] = ['banana', 'apple']

let numbers: number[] = [1, 2, 3, 4];
let numbers2: Array<number> = [1, 2, 3, 4];

// let students: { name: string, age?: number }[] = [{ name: "noona" }, { name: "hyunjoo", age: 34 }];
let students: TStudent[] = [{ name: "noona" }, { name: "hyunjoo", age: 34 }];

let tuple: [string | number, number]
tuple = ['noona', 23]