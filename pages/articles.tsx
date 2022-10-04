import { Card, Grid, Row, Text } from '@nextui-org/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Articles() {
  const { data, error } = useSWR('https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/hrtk92/feed', fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return (
    <></>
  );
  const router = useRouter();
  const zenn: RootObject = data

  return (
    <>
      <Head>
        <title>記事一覧 | HRTK92</title>
      </Head>
      <Text h1 b>記事一覧</Text>
      <Grid.Container gap={2} justify="flex-start">
        {zenn.items.map(article => (
          <Grid xs={6} sm={3} key={article.link}>
            <Card isPressable onClick={() => router.push(article.link)}>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={article.enclosure.link}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={article.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: 'flex-start' }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{article.title}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
}
