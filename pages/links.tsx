import Head from 'next/head';
import type { Link } from '../types/link';
import { client } from '../libs/client'


type Props = {
  links: Array<Link>;
};

export default function Links({ links }: Props) {
  return (
    <>
      <Head>
        <title>リンク集 | HRTK92</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {links.map(link => (
          <div className="rounded overflow-hidden shadow-lg" key={link.id}>
            { link.image?.url &&(
            <img
              className="w-full"
              src={link.image?.url}
              alt="Sunset in the mountains"
            />)}
            <div className="px-6 py-4">
                <a href={link.url}>{link.title}</a>
            
             <p className="text-gray-700 text-base">
               {link.content}
             </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'links' });

  return {
    props: {
      links: data.contents,
    },
  };
};
