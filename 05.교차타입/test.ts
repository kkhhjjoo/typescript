type Popularity =  {
  rate: number;
}

interface Review {
  review: number;
}

type Filter = Popularity & Review

let filter: Filter = {
  rate: 2.3,
  review: 3
}