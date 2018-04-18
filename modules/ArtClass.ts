import ArtInterface from './ArtInterface';

class Art implements ArtInterface {
  title: string;
  author: string;
  created: number;
  country?: string;

  constructor(title, author, created, country?
  ) {
    this.title = title;
    this.author = author;
    this.created = created;
    this.country = country || '';
  }

  estimate(): boolean {
    return true;
  }
}

export { Art as ArtClass };