import { Avatar, Card, Container, Grid, Loading, Row, Spacer, Text } from '@nextui-org/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { ArticleList } from '../types/article'

const fetcher = (url: string) => fetch(url).then(res => res.json() as Promise<ArticleList>)

export default function Home() {
  const { data, error } = useSWR('https://api.rss2json.com/v1/api.json?rss_url=https://zenn.dev/hrtk92/feed', fetcher)

  const router = useRouter()
  return (
    <>
      <Head>
        <title>はらたく - HRTK92</title>
        <meta name='description' content='はらたくのポートフォリオサイトです。' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Grid.Container gap={2} justify='center'>
        <Grid css={{ margin: '$20' }}>
          <Text
            className='animate__animated animate__fadeIn'
            b
            h1
            css={{
              textGradient: '45deg, $purple600 -20%, $pink600 100%',
            }}>
            HRTK92
          </Text>
          <Card.Divider />
          <Text className='animate__animated animate__fadeIn animate__slower' h2 color='gray'>
            はらたく
          </Text>
        </Grid>
        <Grid css={{ margin: '$20' }}>
          <Avatar
            className='animate__animated animate__fadeIn animate__slow'
            src='/MySite/social_icons/myicon.webp'
            alt='HRTK92'
            css={{ size: '$20' }}
            color='gradient'
            bordered
            zoomed
          />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify='center' css={{ color: '$text' }}>
        <Grid>
          <Avatar
            className='animate__animated animate__rotateIn animate__slow'
            squared
            icon={<img src='/MySite/social_icons/github.svg' height={50} width={50} alt='Github' />}
            onClick={() => router.push('https://github.com/HRTK92')}
          />
        </Grid>
        <Grid>
          <Avatar
            className='animate__animated animate__rotateIn animate__slow'
            squared
            icon={<img src='/MySite/social_icons/twitter.png' alt='Twitter' />}
            //onClick={() => router.push('https://twitter.com/HRTK92')}
          />
        </Grid>
        <Grid>
          <Avatar
            className='animate__animated animate__rotateIn animate__slow'
            squared
            icon={<img src='/MySite/social_icons/discord.svg' height={50} width={50} alt='Discord' />}
            onClick={() => router.push('https://discord.com/users/618332297275375636')}
          />
        </Grid>
      </Grid.Container>
      <Card.Divider />
      <Grid.Container gap={2} justify='center'>
        <Grid xs={12} sm={6} justify='center'>
          <Card className='wow animate__animated animate__fadeInUp animate__slow' css={{ p: '$6', mw: '400px' }}>
            <Card.Header onClick={() => router.push('https://github.com/HRTK92')}>
              <img alt='github logo' src='/MySite/social_icons/github.svg' width='34px' height='34px' />
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text
                    b
                    size={20}
                    css={{
                      lineHeight: '$xs',
                      textGradient: '45deg, #e0c3fc 0%, #8ec5fc 100%',
                    }}>
                    GitHub
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>github.com/HRTK92</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
              <Text>趣味で色々開発をしてます。主にwebアプリケーションなどを作っています。</Text>
            </Card.Body>
            <Card.Footer>
              <Text color='primary' onClick={() => router.push('https://github.com/HRTK92')}>
                View GitHub
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} justify='center'>
          <Card className='wow animate__animated animate__fadeInUp animate__slow' css={{ p: '$6', mw: '400px' }}>
            <Card.Header onClick={() => router.push('https://zenn.dev/hrtk92')}>
              <img alt='zenn logo' src='/MySite/social_icons/zenn.png' width='34ppx' height='34px' />
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text
                    b
                    size={20}
                    css={{
                      lineHeight: '$xs',
                      textGradient: '45deg, #e0c3fc 0%, #8ec5fc 100%',
                    }}>
                    Zenn
                  </Text>
                </Grid>
                <Grid xs={12}>
                  <Text css={{ color: '$accents8' }}>zenn.dev/hrtk92</Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
              <Text>Zennで記事を書いています。主にプログラミングに関する記事を書いています。</Text>
            </Card.Body>
            <Card.Footer>
              <Text
                color='primary'
                onClick={() => {
                  if (typeof document !== 'undefined') {
                    document.getElementById('zenn_articles')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }
                }}>
                View article list
              </Text>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Card.Divider />
      <Spacer y={1} />

      <Text
        h3
        css={{
          textAlign: 'center',
          textGradient: '45deg, #84fab0 -20%, #8fd3f4 100%',
        }}>
        Zenn articles
      </Text>
      <Grid.Container id='zenn_articles' gap={2} justify='flex-start'>
        {data ? (
          <>
            {data.items.map(article => (
              <Grid xs={6} sm={3} key={article.link}>
                <Card
                  className='wow animate__animated animate__fadeInLeft'
                  isPressable
                  onClick={() => router.push(article.link)}>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={article.enclosure.link}
                      objectFit='cover'
                      width='100%'
                      height={140}
                      alt={article.title}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: 'flex-start' }}>
                    <Row wrap='wrap' justify='space-between' align='center'>
                      <Text b>{article.title}</Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </>
        ) : (
          <Grid.Container justify='center'>
            <Grid>
              <Loading type='points' />
            </Grid>
          </Grid.Container>
        )}
      </Grid.Container>
    </>
  )
}
