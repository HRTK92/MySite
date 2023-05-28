export type Article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  eye_catch: {
    url: string
    height: number
    width: number
  }
  tag: string
  category: string
}
export interface ArticleList {
  status: string
  feed: Feed
  items: Item[]
}

interface Item {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: Enclosure
  categories: any[]
}

interface Enclosure {
  url: string
  type: string
}

interface Feed {
  url: string
  title: string
  link: string
  author: string
  description: string
  image: string
}
