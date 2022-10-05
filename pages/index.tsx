import {
  Avatar,
  Card,
  Grid,
  Link,
  Text,
  Row,
  Loading,
  Spacer,
} from '@nextui-org/react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { ArticleList } from '../types/article';

const fetcher = (url: string) =>
  fetch(url).then(res => res.json() as Promise<ArticleList>);

export default function Home() {
  const { data, error } = useSWR(
    'https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/hrtk92/feed',
    fetcher,
  );

  const router = useRouter();
  return (
    <>
      <Head>
        <title>はらたく - HRTK92</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid.Container gap={2} justify="center">
        <Grid css={{ margin: '$20' }}>
          <Text
            className="animate__animated animate__fadeIn"
            b
            h1
            css={{
              textGradient: '45deg, $purple600 -20%, $pink600 100%',
            }}>
            HRTK92
          </Text>
          <Text
            className="animate__animated animate__fadeIn animate__slow"
            h3
            color="gray">
            はらたく
          </Text>
        </Grid>
        <Grid css={{ margin: '$20' }}>
          <Avatar
            className="animate__animated animate__fadeIn"
            src="https://avatars.githubusercontent.com/u/70054655?v=4"
            size={'xl'}
            color="gradient"
            bordered
            zoomed
          />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="center" css={{ color: '$text' }}>
        <Grid>
          <Avatar
            className="animate__animated animate__rotateIn"
            squared
            icon={<span className="material-symbols-outlined">code</span>}
            onClick={() => router.push('https://github.com/HRTK92')}
          />
        </Grid>
        <Grid>
          <Avatar
            className="animate__animated animate__rotateIn"
            squared
            icon={
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" />
            }
            onClick={() => router.push('https://twitter.com/HRTK92')}
          />
        </Grid>
        <Grid>
          <Avatar
            className="animate__animated animate__rotateIn"
            squared
            icon={
              <img src="https://www.svgrepo.com/show/353655/discord-icon.svg" />
            }
            onClick={() =>
              router.push('https://discord.com/users/618332297275375636')
            }
          />
        </Grid>
      </Grid.Container>
      <Card.Divider />
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={6} justify="center">
          <Card
            className="animate__animated animate__fadeInUp"
            css={{ p: '$6', mw: '400px' }}>
            <Card.Header
              onClick={() => router.push('https://github.com/HRTK92')}>
              <img
                alt="github logo"
                src="https://github.githubassets.com/favicons/favicon.svg"
                width="34px"
                height="34px"
              />
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    GitHub
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>github.com/HRTK92</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
              <Text>
                趣味で開発をしてます。主にwebアプリケーションなどを作っています。
              </Text>
            </Card.Body>
            <Card.Footer>
              <Link
                color="primary"
                onClick={() => router.push('https://github.com/HRTK92')}>
                View GitHub
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} justify="center">
          <Card
            className="animate__animated animate__fadeInUp"
            css={{ p: '$6', mw: '400px' }}>
            <Card.Header onClick={() => router.push('https://zenn.dev/hrtk92')}>
              <img
                alt="zenn logo"
                src="https://zenn.dev/images/icon.png"
                width="34px"
                height="34px"
              />
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    Zenn
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>zenn.dev/hrtk92</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
              <Text>
                Zennで記事を書いています。主にプログラミングに関する記事を書いています。
              </Text>
            </Card.Body>
            <Card.Footer>
              <Text color="primary" onClick={() => {
                if (typeof document !== 'undefined') {
                  document.getElementById("zenn_articles")?.scrollIntoView(({ behavior: 'smooth', block: 'center' }))
                }
              }}>
                View article list
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Card.Divider />
      <Spacer y={1}/>
      <Grid.Container id='zenn_articles' gap={2} justify="flex-start">
        {data ? (
          <>
            {data.items.map(article => (
              <Grid xs={6} sm={3} key={article.link}>
                <Card
                  className='animate__animated animate__fadeInLeft animate__delay-1s'
                  isPressable onClick={() => router.push(article.link)}>
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
          </>
        ) : (
          <Text>最新の記事を読み込み中<Loading/></Text>
        )}
      </Grid.Container>
    </>
  );
}
