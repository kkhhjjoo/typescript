//Female Male
const enum Gender { 
  FEMALE = 'Female',
  MALE = 'Male',
}
enum SearchType {
  Date= "Date", //0
  KEYWORD = "Keyword", //1
  ORDER = "Order" //2
}
let gender: Gender = Gender.FEMALE;
// gender = 'Male';
// gender = 'Femala';

console.log('hey', SearchType.KEYWORD);