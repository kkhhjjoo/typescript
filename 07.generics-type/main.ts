import { useState } from 'react';


// type ArrayType<T> = T[]

// const numberArray: ArrayType<number> = [1, 2, 3]
// const stringArray: ArrayType<string> = ['a', 'b']


//카테고리 정보
// { 
//     status: 'ok',
//     totalPage: 2,
//     totalResult: 10,
//     page: 1,
//     data: [{ name: '액션' }, { name: '로맨스' }, { name: '가족'}]
// }

// //영화 정보
// { 
//     status: 'ok',
//     totalPage: 20,
//     totalResult: 300,
//     page: 1,
//     data: [{ title: '기생충', genre: '액션' }, { title: '파묘', genre: '공포' }, { title: '7번방의 선물', genre: '가족'}]
// }

// //TV정보
// { 
//     status: 'ok',
//     totalPage: 20,
//     totalResult: 300,
//     page: 1,
//     data: [{series: '논스톱', runningTime: '120'}]
// }

// type CategoryResponse = {
//   status: string;
//   totalPage: number;
//   totalResult: number;
//   page: number;
//   data: {name: string}[]
// }

// type MovieResponse = {
//   status: string;
//   totalPage: number;
//   totalResult: number;
//   page: number;
//   data: { title: string;  genre: string}[]
// }

type ApiResponse<T> = {
  status: string;
  totalPage: number;
  totalResult: number;
  page: number;
  data: T[];
}

type Movie = { title: string;  genre: string}

type Category = {
  name: string;
}

type CategoryResponse = ApiResponse<Category>

type MovieResponse = ApiResponse<Movie>

let movieData:MovieResponse= { 
    status: 'ok',
    totalPage: 20,
    totalResult: 300,
    page: 1,
    data: [{ title: '기생충', genre: '액션' }, { title: '파묘', genre: '공포' }, { title: '7번방의 선물', genre: '가족'}]
}

// function useState<T>(초기화값: T): [T, 함수<T>] {
//   return [값, 함수]
// }

// const [value, setValue] = useState(null);



// function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

// const [value2, setValue2] = useState<boolean>(false);

interface Length { 
  length: number;
}

function getValue<T extends Length>(data: T) { 
  console.log(data.length);
}

console.log(getValue('hello'));
// console.log(getValue(3));
console.log(getValue([1, 2, 3]));


//1. 조건부 타입

type IsString<T> = T extends string ? 'yes' : 'no';

type result1 = IsString<string>

//2. mapped type

type Movie2 = {
  title: string;
  genre: string;
  rate: number;
}

type Subset<T> = {
  [K in keyof T]?:T[K]
}

const movie1: Subset<Movie2> = { title: '기생충', genre: '액션' }
const movie2: Subset<Movie2> = { rate: 2 }

interface Pair<T, U> { 
  first: T;
  second: U;
  display(): void
  // display:() => void
}

const pair: Pair<string, number> = {
  first: 'noona',
  second: 2,
  display() {
    console.log(this.first + "는" + this.second+ "살 입니다");
  }
}

pair.display();