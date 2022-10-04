import {
  Avatar,
  Card,
  Container,
  Grid,
  StyledCardBody,
  Link,
  Text,
} from '@nextui-org/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR(
    'https://api.github.com/users/HRTK92',
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
          <Text b h1>
            HRTK92
          </Text>
        </Grid>
        <Grid css={{ margin: '$20' }}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/70054655?v=4"
            size={'xl'}
            color="gradient"
            bordered
            zoomed></Avatar>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="center" css={{ color: '$text' }}>
        <Grid>
          <Avatar
            squared
            icon={<span className="material-symbols-outlined">code</span>}
            onClick={() => router.push('https://github.com/HRTK92')}
          />
        </Grid>
      </Grid.Container>
      <Card.Divider />
      <Grid.Container gap={2}>
        <Grid xs={12} md={6}>
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header onClick={()=> router.push("https://zenn.dev/hrtk92")}>
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
                  <Text css={{ color: '$accents8' }}>zenn.dev</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
              <Text>
                Zennで記事を書いています。主にプログラミングに関する記事を書いています。
              </Text>
            </Card.Body>
            <Card.Footer>
              <Link
                color='primary'
                onClick={()=>router.push('/articles')}>
                View article list
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
