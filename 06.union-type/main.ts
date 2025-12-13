type Track = {
  title: string;
  releaseDate: string;
}

type Artist = {
  name: string;
  releaseDate: string;
}

type SearchResult = Track | Artist

interface SearchResponse {
  searchResult: Track | Artist
}

let results: SearchResult[] = [{ title: 'hello', releaseDate: '2024' }, { name: 'hyunjoo', releaseDate: '2025' }];

function getName(result: Track | Artist) {
  return result.releaseDate;
}