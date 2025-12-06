interface IPerson { 
  name: string;
  age: number;
  gender: string;
}

interface IForeigner extends IPerson {
  // name: string;
  // age: number;
  // gender: string;
  nationality: string;
}

// type TForeigner = IPerson & { nationality: string, period: Date }
type TForeigner = IPerson | { nationality: string, period: Date }

// let american: IForeigner = {name: 'Jacob', age: 23 , gender: 'F', nationality: 'american'}
let american: TForeigner = { nationality: 'american', period: new Date('')}