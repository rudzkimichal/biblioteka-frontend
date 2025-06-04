export interface Item {
  _id: string;
  author: Author;
  comments: string;
  desc: string;
  imageUrl: string;
  isbn: string;
  location: string;
  publishedBy: string;
  title: string;
  vol: string;
  yearPublished: string;

}

interface Author {
  firstName: string;
  lastName: string;
}
