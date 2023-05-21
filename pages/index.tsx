import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { ArticleList } from '../types/article'

import expand_more_svg from '../public/expand_more.svg'
import favorite_svg from '../public/favorite.svg'

export default function Home() {
  const { data: zennFeed } = useSWR('/api/zennFeed', (url: string) =>
    fetch(url).then(res => res.json() as Promise<ArticleList>),
  )
  const { data: zennUser } = useSWR('/api/zennUser', (url: string) => fetch(url).then(res => res.json()))

  const router = useRouter()

  if (typeof document !== 'undefined') {
    document.oncontextmenu = () => {
      return false
    }
  }

  return (
    <>
      <Head>
        <title>はらたく - HRTK92</title>
        <meta name='description' content='はらたくのポートフォリオサイトです。' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <main className='h-screen select-none snap-y snap-mandatory overflow-scroll scroll-smooth bg-white'>
        <div className='flex h-screen w-screen animate-text-focus-in snap-start flex-col p-2 text-black'>
          <div className='h-2/5 p-2'>
            <div className='h-1/3' />
            <div className='flex w-full flex-col'>
              <div className='flex w-full'>
                <div className='h-32 w-32 rounded-full bg-gray-800 transition duration-500 hover:scale-110'></div>
                <div className='ml-4 flex flex-col justify-center'></div>
              </div>
              <p className='mt-2 font-bold text-gray-400'>
                <span className='inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-xl text-transparent'>
                  HRTK92
                </span>{' '}
                is software developer.
              </p>
            </div>
          </div>

          <div className='h-1/3 p-2'></div>

          <div className='flex h-1/6 flex-col p-2'>
            <div className='flex animate-text-focus-in-slow flex-row justify-center'>
              <a
                href='https://github.com/HRTK92'
                className='duration-5000 mx-1 rounded-xl bg-gray-200 p-2 shadow-md transition hover:scale-125 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500'>
                <img src='/social_icons/github.svg' alt='GitHub' className='h-7 w-7' />
              </a>

              <a
                href='#zenn'
                className='duration-5000 mx-1 rounded-xl bg-gray-200 p-2 shadow-md transition hover:scale-125 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500'>
                <img src='/social_icons/zenn.png' alt='Zenn' className='h-7 w-7 rounded-full' />
              </a>

              <a
                href='#'
                className='duration-5000 mx-1 rounded-xl bg-gray-200 p-2
              shadow-md transition hover:scale-125 hover:bg-gradient-to-r
              hover:from-cyan-400 hover:to-blue-500 '>
                <img src='/social_icons/twitter.svg' alt='Twitter' className='h-7 w-7' />
              </a>

              <a
                href='https://discord.com/users/618332297275375636'
                className='duration-5000 mx-1 rounded-xl bg-gray-200 p-2 shadow-md transition hover:scale-125 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500'>
                <img src='/social_icons/discord.svg' alt='Discord' className='h-7 w-7' />
              </a>
            </div>

            <a className='mt-12 flex justify-center' href='#skills'>
              <img
                src={expand_more_svg.src}
                alt='expand_more'
                className='h-7 w-7 animate-bounce-slow fill-black text-gray-500 transition hover:scale-125 hover:text-gray-700'
              />
            </a>
          </div>
        </div>

        <div
          className='flex h-screen w-screen snap-start flex-col rounded-t-2xl bg-gray-100 p-2 text-black'
          id='skills'>
          <div className='flex flex-col p-2'>
            <p className='pb-5 text-4xl font-bold text-gray-700'>Skills</p>
            <div className='flex flex-col'>
              <div className='grid grid-cols-2 py-1'>
                <div className='flex flex-row rounded-lg py-1 transition duration-500 hover:scale-105 hover:shadow-md'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png'
                    alt='Python'
                    className='h-16 w-16 p-1'
                  />
                  <div className='flex flex-col justify-center'>
                    <p className='px-1 font-bold text-gray-800'>Python</p>
                  </div>
                </div>
                <div className='flex flex-row rounded-lg py-1 transition duration-500 hover:scale-105 hover:shadow-md'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/115px-Typescript_logo_2020.svg.png'
                    alt='TypeScript'
                    className='h-16 w-16 p-1'
                  />
                  <div className='flex flex-col justify-center'>
                    <p className='px-1 font-bold text-gray-800'>TypeScript</p>
                  </div>
                </div>
                <div className='flex flex-row rounded-lg py-1 transition duration-500 hover:scale-105 hover:shadow-md'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Dart_logo.png/600px-Dart_logo.png?20220718193800'
                    alt='Dart'
                    className='h-16 w-16 p-1'
                  />
                  <div className='flex flex-col justify-center'>
                    <p className='px-1 font-bold text-gray-800'>Dart</p>
                    <p className='px-1 text-sm font-bold text-gray-400'>studying</p>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-2 border-t py-1'>
                <div className='flex flex-row rounded-lg py-1 transition duration-500 hover:scale-105 hover:shadow-md'>
                  <div className='h-16 w-16 rounded-lg bg-gray-200 p-1' />
                  <div className='flex flex-col justify-center'>
                    <p className='px-1 font-bold text-gray-800'>Next.js</p>
                  </div>
                </div>
                <div className='flex flex-row rounded-lg py-1 transition duration-500 hover:scale-105 hover:shadow-md'>
                  <div className='h-16 w-16 rounded-lg bg-gray-200 p-1' />
                  <div className='flex flex-col justify-center'>
                    <p className='px-1 font-bold text-gray-800'>Django</p>
                  </div>
                </div>
                <div className='flex flex-row rounded-lg py-1 transition duration-500 hover:scale-105 hover:shadow-md'>
                  <div className='h-16 w-16 rounded-lg bg-gray-200 p-1' />
                  <div className='flex flex-col justify-center'>
                    <p className='px-1 font-bold text-gray-800'>Flutter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex h-screen w-screen snap-start flex-col bg-gray-100 p-2 text-black' id='zenn'>
          <div className='flex flex-col p-2'>
            <p className='text-4xl font-bold text-gray-700'>Zenn</p>
            <div className='flex flex-col py-4'>
              <div
                className='flex flex-row'
                onClick={() => {
                  router.push('https://zenn.dev/hrtk92')
                }}>
                <img
                  src={zennUser?.user.avatar_url}
                  alt='HRTK92'
                  className='h-16 w-16 rounded-full transition duration-500 hover:scale-105'
                />
                <div className='p-2'>
                  <p className='px-1 font-bold text-gray-800'>{zennUser?.user.name}</p>
                  <p className='px-1 text-sm font-bold text-gray-600 transition duration-500 hover:text-pink-400'>
                    <img src={favorite_svg.src} alt='いいね' className='inline-block h-4 w-4' />
                    {zennUser?.user.total_liked_count}
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4'>
                {zennFeed ? (
                  zennFeed.items.splice(2).map((item, index) => (
                    <div
                      key={index}
                      className='p-2'
                      onClick={() => {
                        setTimeout(() => {
                          router.push(item.link)
                        }, 500)
                      }}>
                      <div className='flex-none  rounded-xl bg-gray-200 p-2 shadow-md transition duration-500 hover:scale-105 hover:bg-blue-400'>
                        <img src={item.enclosure.link} alt={item.title} className='rounded-lg' />
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className='p-2'>
                      <div className='flex-none rounded-xl bg-gray-200 p-2 shadow-md transition duration-500 hover:scale-105'>
                        <div className='flex animate-pulse space-x-4'>
                          <div className='flex-1 space-y-4 py-1'>
                            <div className='h-4 w-3/4 rounded bg-gray-400'></div>
                            <div className='space-y-2'>
                              <div className='h-4 rounded bg-gray-400'></div>
                              <div className='h-4 w-5/6 rounded bg-gray-400'></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='p-2'>
                      <div className='flex-none rounded-xl bg-gray-200 p-2 shadow-md transition duration-500 hover:scale-105'>
                        <div className='flex animate-pulse space-x-4'>
                          <div className='flex-1 space-y-4 py-1'>
                            <div className='h-4 w-3/4 rounded bg-gray-400'></div>
                            <div className='space-y-2'>
                              <div className='h-4 rounded bg-gray-400'></div>
                              <div className='h-4 w-5/6 rounded bg-gray-400'></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='p-2'>
                      <div className='flex-none rounded-xl bg-gray-200 p-2 shadow-md transition duration-500 hover:scale-105'>
                        <div className='flex animate-pulse space-x-4'>
                          <div className='flex-1 space-y-4 py-1'>
                            <div className='h-4 w-3/4 rounded bg-gray-400'></div>
                            <div className='space-y-2'>
                              <div className='h-4 rounded bg-gray-400'></div>
                              <div className='h-4 w-5/6 rounded bg-gray-400'></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-screen w-screen snap-start flex-col bg-gray-100 p-2 text-black'></div>
      </main>
    </>
  )
}
