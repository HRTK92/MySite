import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArticleList } from '../types/article'
import { ArrowDown, Heart } from '@phosphor-icons/react'
import useSWR from 'swr'

export default function Home() {
  const { data: zennFeed } = useSWR('/api/zennFeed', (url: string) =>
    fetch(url).then(res => res.json() as Promise<ArticleList>),
  )
  const { data: zennUser } = useSWR('/api/zennUser', (url: string) => fetch(url).then(res => res.json()))

  const router = useRouter()

  const texts = ['student', 'web developer', 'software developer']
  const [currentText, setCurrentText] = useState(texts[0])
  const [isHidden, setIsHidden] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHidden(true)
      setTimeout(() => {
        const currentIndex = texts.indexOf(currentText)
        const nextIndex = (currentIndex + 1) % texts.length
        setCurrentText(texts[nextIndex])
        setIsHidden(false)
      }, 1000)
    }, 2000)
    return () => {
      clearInterval(interval)
    }
  }, [currentText, texts])
  if (typeof document !== 'undefined') {
    document.oncontextmenu = () => {
      return false
    }
  }

  return (
    <>
      <Head>
        <title>はらたく - HRTK92</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='max-w-2xl mx-auto'>
        <main className='h-screen select-none snap-y snap-mandatory overflow-scroll scroll-smooth bg-white max-w-2xl'>
          <div className='flex h-screen animate-text-focus-in snap-start flex-col p-2 text-black'>
            <div className='h-2/5 p-2'>
              <div className='h-1/3' />
              <div className='flex w-full flex-col'>
                <div className='flex w-full'>
                  {router.query.from === 'Instagram' ? (
                    <img
                      src='/image/avatar.jpg'
                      className='h-32 w-32 rounded-full transition duration-500 hover:scale-110'
                      alt='avatar'
                    />
                  ) : (
                    <div className='h-32 w-32 rounded-full bg-gray-800 transition duration-500 hover:scale-110' />
                  )}
                  <div className='ml-4 flex flex-col justify-center'></div>
                </div>
                <p className='mt-2 font-bold text-gray-400'>
                  <span className='inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-xl text-transparent'>
                    HRTK92
                  </span>{' '}
                  is a{' '}
                  <span className={isHidden ? 'animate-text-focus-out' : 'animate-text-focus-in'}>{currentText}</span>.
                </p>
              </div>
            </div>

            <div className='h-1/3 p-2'></div>

            <div className='flex h-1/6 flex-col p-2'>
              <div className='flex animate-tracking-in-expand-fwd-bottom flex-row justify-center'>
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
                <ArrowDown className='h-7 w-7 animate-bounce-slow fill-black text-gray-500 transition hover:scale-125 hover:text-gray-700' />
              </a>
            </div>
          </div>

          <div className='flex h-screen snap-start flex-col rounded-t-2xl bg-gray-100 p-2 text-black' id='skills'>
            <div className='flex flex-col p-2'>
              <p className='pb-5 text-4xl font-bold text-gray-700'>
                Skills <span className='text-sm text-gray-500'>スキル</span>
              </p>
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
                      <p className='px-1 pl-1 text-xs font-bold text-gray-400'>& Javascript</p>
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
                    <img
                      src='https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg'
                      className='h-16 w-16 rounded-lg bg-gray-200 p-1'
                      alt='Flutter'
                    />
                    <div className='flex flex-col justify-center'>
                      <p className='px-1 font-bold text-gray-800'>Flutter</p>
                    </div>
                  </div>
                  <div className='flex flex-row rounded-lg py-1 transition duration-500 hover:scale-105 hover:shadow-md'>
                    <img
                      src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333'
                      className='h-16 w-16 rounded-lg bg-gray-200 p-1'
                      alt='Tailwind CSS'
                    />
                    <div className='flex flex-col justify-center'>
                      <p className='px-1 font-bold text-gray-800'>Tailwind CSS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col p-2'>
              <p className='pb-5 text-3xl font-bold text-gray-700'>Repository</p>
              <div
                className='flex flex-row rounded-md border bg-gray-800 p-2'
                onClick={() => {
                  router.push('https://github.com/HRTK92/next-boards')
                }}>
                <img src='/social_icons/github.svg' alt='GitHub' className='h-10 w-10 fill-black' />
                <div>
                  <p className='px-1 font-bold text-white'>HRTK92 / next-boards</p>
                  <p className='px-1 text-sm font-bold text-gray-400'>
                    ☆ 2 <span className='px-1'>・</span> TypeScript/Next.js
                  </p>
                </div>
              </div>
              <div
                className='cursor-pointer p-3 text-end text-gray-700 transition duration-500 hover:scale-105 hover:text-gray-900'
                onClick={() => {
                  router.push('https://github.com/HRTK92?tab=repositories&q=&type=&language=&sort=stargazers')
                }}>
                and more...
              </div>
            </div>
          </div>

          <div className='flex h-screen snap-start flex-col bg-gray-100 p-2 text-black' id='zenn'>
            <div className='flex flex-col p-2'>
              <p className='text-4xl font-bold text-gray-700'>
                Zenn <span className='text-sm text-gray-500'>記事</span>
              </p>
              <div className='flex flex-col'>
                <div
                  className='flex flex-row rounded-md p-2 shadow-md transition duration-500 hover:scale-105 hover:shadow-lg'
                  onClick={() => {
                    router.push('https://zenn.dev/hrtk92')
                  }}>
                  <img
                    src={zennUser?.user.avatar_url}
                    alt='HRTK92'
                    className='h-12 w-12 rounded-full transition duration-500 hover:scale-105'
                  />
                  <div className='p-1'>
                    <p className='px-1 font-bold text-gray-800'>{zennUser?.user.name}</p>
                    <p className='px-1 text-sm font-bold text-gray-600 transition duration-500 hover:text-pink-400'>
                      <Heart className='inline-block h-4 w-4' />
                      {zennUser?.user.total_liked_count}
                    </p>
                  </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4'>
                  {zennFeed ? (
                    zennFeed.items.map(item => (
                      <div
                        className='p-2'
                        key={item.guid}
                        onClick={() => {
                          setTimeout(() => {
                            router.push(item.link)
                          }, 500)
                        }}>
                        <div className='flex-none rounded-xl bg-gray-200 p-1 shadow-sm transition duration-500 hover:scale-105 hover:bg-blue-400'>
                          <img src={item.enclosure?.url} alt={item.title} className='rounded-lg' />
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
            <div className='flex flex-col p-2'>
              <p className='text-4xl font-bold text-gray-700'>
                OSS <span className='text-sm text-gray-500'>活動</span>
              </p>
            </div>
            <div className='flex flex-col'>
              <div className='grid grid-cols-2 md:grid-cols-4'>
                <div
                  className='p-2'
                  onClick={() => {
                    setTimeout(() => {
                      router.push('https://github.com/ImranR98/Obtainium/pull/425')
                    }, 500)
                  }}>
                  <div className='flex-none rounded-xl bg-gray-200 p-1 shadow-sm transition duration-500 hover:scale-105 hover:bg-blue-400'>
                    <img
                      src='https://opengraph.githubassets.com/a8d1a304a25f464e4e16183aaf1227c98fa687027820b4235df8e4c00216e4c7/ImranR98/Obtainium/pull/425'
                      className='rounded-lg'
                      alt='Obtainium'
                    />
                  </div>
                </div>
                <div
                  className='p-2'
                  onClick={() => {
                    setTimeout(() => {
                      router.push('https://github.com/line/line-bot-sdk-nodejs/pull/428')
                    }, 500)
                  }}>
                  <div className='flex-none rounded-xl bg-gray-200 p-1 shadow-sm transition duration-500 hover:scale-105 hover:bg-blue-400'>
                    <img
                      src='https://opengraph.githubassets.com/f7a9649f41025d5173ac148e91fe644a724b66da3506cd229d9cc798a19dda3b/line/line-bot-sdk-nodejs/pull/428'
                      className='rounded-lg'
                      alt='line-bot-sdk-nodejs'
                    />
                  </div>
                </div>
                <div
                  className='p-2'
                  onClick={() => {
                    setTimeout(() => {
                      router.push('https://github.com/zenn-dev/zenn-vscode-extension/pull/41')
                    }, 500)
                  }}>
                  <div className='flex-none rounded-xl bg-gray-200 p-1 shadow-sm transition duration-500 hover:scale-105 hover:bg-blue-400'>
                    <img
                      src='https://opengraph.githubassets.com/227924ad036124ffb5f9c4080d6e8fb681e128024eddfd11d85d8ddb53613eb8/zenn-dev/zenn-vscode-extension/pull/41'
                      className='rounded-lg'
                      alt='zenn-vscode-extension'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='p-1 text-gray-500 font-bold'>今までに貢献したリポジトリ</div>
              <div className='flex flex-row p-2 rounded-md border'>
                <img
                  src='https://avatars.githubusercontent.com/u/64953479?s=40&v=4'
                  alt='Zenn'
                  className='p-1 rounded-full'
                  onClick={() => {
                    router.push('https://github.com/zenn-dev')
                  }}
                />
                <img
                  src='https://avatars.githubusercontent.com/u/13128444?s=40&v=4'
                  alt='LINE'
                  className='p-1 rounded-full'
                  onClick={() => {
                    router.push('https://github.com/line')
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
