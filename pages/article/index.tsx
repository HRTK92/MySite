import { client } from '../../libs/client';
import type { Article } from '../../types/article';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  articles: Array<Article>;
};

export default function Articles({ articles }: Props) {
  return (
    <>
      <Head>
        <title>記事一覧 | HRTK92</title>
      </Head>
      <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        記事一覧
      </h1>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {articles.map(article => (
          <div className="rounded overflow-hidden shadow-lg" key={article.id}>
            { article.eye_catch?.url &&(<img
              className="w-full"
              src={article.eye_catch?.url}
              alt=""
            />)}
            <div className="px-6 py-4">
              <Link href={`/article/${article.id}`} passHref>
                <a>{article.title}</a>
              </Link>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  category: {article.category}
                </span>
              {article.tag && (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{article.tag}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'articles' });

  return {
    props: {
      articles: data.contents,
    },
  };
};
