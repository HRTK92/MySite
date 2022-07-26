import Head from 'next/head';
import useSWR from 'swr';

interface RootObject {
  status: string;
  feed: Feed;
  items: Item[];
}

interface Item {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: Enclosure;
  categories: any[];
}

interface Enclosure {
  link: string;
  type: string;
}

interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

const parser = new DOMParser();
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Articles() {
  const { data, error } = useSWR('https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/hrtk92/feed', fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const zenn: RootObject = data

  return (
    <>
      <Head>
        <title>記事一覧 | HRTK92</title>
      </Head>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {zenn.items.map(article => (
          <div className="rounded overflow-hidden shadow-lg" key={article.link}>
              <img className="w-full" src={article.enclosure.link} alt="" />
            <div className="px-6 py-4">
              <a href={article.link}>{article.title}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
