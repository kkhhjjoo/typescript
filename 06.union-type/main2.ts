//1.typeof(원시타입만 가능: number, string, boolean, undefined)
type SearchType = number | string | Object;

function searchKeyword(keyword: SearchType) {
  //넘버로 들어오는 타입은 스트링으로 바꿔주기
  if (typeof keyword === 'object') return keyword.toString();
  return keyword;
}

console.log(searchKeyword(3), typeof searchKeyword(3));
console.log(searchKeyword({ name: '3' }));

//2. instanceof(객체타입 가능)

type Period = {
  start: string;
  end: string;
}

type SearchType2 = Period | Date;

function getDate(day: SearchType2):Date {
  if (day instanceof Date) return day;
  return new Date(day.start);
}

getDate({ start: '2024-01-01', end: '2025-01-01' });

//3. in
type Track2 = {
  type: 'track';
  title: string;
  releaseDate: string;
}

type Artist2 = {
  type: 'artist';
  name: string;
  debutDate: string;
}

function getName(result: Track2 | Artist2) {
  if ('title' in result) return result.title;
  if ('name' in result) return result.name;
}

//4. is
// function 타입가드(변수: any): 변수 is 특정타입 {
//   return 조건식;
// }

function isTrack(result: Track2 | Artist2):result is Track2 {
  return (result as Track2).title !== undefined;
}

function isArtist(result: Track2 | Artist2):result is Artist2 {
  return (result as Artist2).name !== undefined;
}

function printInfo(result: Track2 | Artist2) {
  if (isTrack(result)) {
    console.log(result.title)
  } else if (isArtist(result)) {
    console.log(result.name);
  }
}

const result: Track2 | Artist2 = {
  type: 'track',
  title: 'hey',
  releaseDate: '2025'
}

interface Radio { 
  type: 'radio',
  title: string,
  numberOfSongs: number
}

type SearchResult2 = Track2 | Artist2 | Radio;

function getTypeName(result: SearchResult2) {
  if (result.type === 'track') return '트랙';
  else if (result.type === 'artist') return '아티스트';
    //radio타입을 지나친다
  else if (result.type === 'radio') return '라디오';
  else {
    exhaustiveCheck(result);
    return '결과';
  }
}

function exhaustiveCheck(param: never) { 
  throw new Error('에러');
}