type Popularity =  {
  rate: number;
}

interface Review {
  rate: string;
}

type Filter = Popularity & Review

let filter: Filter = {
  rate: 2.3,
}

interface IFilter extends Popularity, Review { 
  
}