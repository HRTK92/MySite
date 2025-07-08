'use client'

import { ArrowDown, Heart } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { memo, useCallback, useEffect, useState } from 'react'
import { ossData } from '../data/oss'
import { repositoriesData } from '../data/repositories'
import { skillsData } from '../data/skills'
import { zennFeed } from '../data/zenn-feed'
import { zennUser } from '../data/zenn-user'

const SocialIcon = memo(
  ({
    href,
    src,
    alt,
    className = 'h-7 w-7',
  }: {
    href: string
    src: string
    alt: string
    className?: string
  }) => (
    <a
      href={href}
      className='duration-300 mx-1 rounded-xl bg-gray-200 p-2 shadow-md transition hover:scale-125 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500'
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={`Visit ${alt} profile`}
    >
      <img src={src} alt={alt} width={28} height={28} className={className} />
    </a>
  )
)
SocialIcon.displayName = 'SocialIcon'

const SkillItem = memo(
  ({
    src,
    alt,
    title,
    subtitle,
  }: {
    src: string
    alt: string
    title: string
    subtitle?: string
  }) => (
    <div className='flex flex-row rounded-lg py-1 transition duration-500 hover:scale-105 hover:shadow-md'>
      <img src={src} alt={alt} width={64} height={64} className='h-16 w-16 p-1' />
      <div className='flex flex-col justify-center'>
        <p className='px-1 font-bold text-gray-800'>{title}</p>
        {subtitle && <p className='px-1 text-xs font-bold text-gray-400'>{subtitle}</p>}
      </div>
    </div>
  )
)
SkillItem.displayName = 'SkillItem'

export default function Home() {
  const router = useRouter()

  const texts = ['student', 'web developer', 'software developer', 'open source contributor']
  const [currentText, setCurrentText] = useState(texts[0])
  const [isHidden, setIsHidden] = useState(false)

  // Optimized text cycling with useCallback
  const cycleText = useCallback(() => {
    setIsHidden(true)
    setTimeout(() => {
      const currentIndex = texts.indexOf(currentText)
      const nextIndex = (currentIndex + 1) % texts.length
      setCurrentText(texts[nextIndex])
      setIsHidden(false)
    }, 1000)
  }, [currentText, texts])

  useEffect(() => {
    const interval = setInterval(cycleText, 2000)
    return () => clearInterval(interval)
  }, [cycleText])

  // Disable right-click context menu
  useEffect(() => {
    const handleContextMenu = (e: Event) => e.preventDefault()
    document.addEventListener('contextmenu', handleContextMenu)
    return () => document.removeEventListener('contextmenu', handleContextMenu)
  }, [])

  return (
    <div className='max-w-2xl mx-auto font-rounded'>
      <main
        className='h-screen select-none snap-y snap-mandatory overflow-scroll scroll-smooth bg-white max-w-2xl scrollbar-hide'
        role='main'
      >
        {/* Hero Section */}
        <section
          className='flex h-screen animate-text-focus-in snap-start flex-col p-2 text-black'
          aria-label='Hero section'
        >
          <div className='h-2/5 p-2'>
            <div className='h-1/3' />
            <div className='flex w-full flex-col'>
              <div className='flex w-full'>
                <div className='h-32 w-32 rounded-full bg-gray-800 transition duration-500 hover:scale-110' />
                <div className='ml-4 flex flex-col justify-center'></div>
              </div>
              <p className='mt-2 font-bold text-gray-400'>
                <span className='inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-xl text-transparent'>
                  HRTK92
                </span>{' '}
                is a{' '}
                <span
                  className={isHidden ? 'animate-text-focus-out' : 'animate-text-focus-in'}
                  aria-live='polite'
                >
                  {currentText}
                </span>
                .
              </p>
            </div>
          </div>

          <div className='h-1/3 p-2'></div>

          <div className='flex h-1/6 flex-col p-2'>
            <nav
              className='flex animate-tracking-in-expand-fwd-bottom flex-row justify-center'
              aria-label='Social media links'
            >
              <SocialIcon
                href='https://github.com/HRTK92'
                src='/social_icons/github.svg'
                alt='GitHub'
              />
              <SocialIcon
                href='#zenn'
                src='/social_icons/zenn.png'
                alt='Zenn'
                className='h-7 w-7 rounded-full'
              />
              <SocialIcon href='#' src='/social_icons/twitter.svg' alt='Twitter' />
              <SocialIcon
                href='https://discord.com/users/618332297275375636'
                src='/social_icons/discord.svg'
                alt='Discord'
              />
            </nav>

            <a
              className='mt-12 flex justify-center'
              href='#skills'
              aria-label='Scroll to skills section'
            >
              <ArrowDown className='h-7 w-7 animate-bounce-slow fill-black text-gray-500 transition hover:scale-125 hover:text-gray-700' />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className='flex h-screen snap-start flex-col rounded-t-2xl bg-gray-100 p-2 text-black'
          id='skills'
          aria-label='Skills section'
        >
          <div className='flex flex-col p-2'>
            <h2 className='pb-5 text-4xl font-bold text-gray-700'>
              Skills <span className='text-sm text-gray-500'>スキル</span>
            </h2>
            <div className='flex flex-col'>
              <div className='grid grid-cols-2 py-1'>
                {skillsData.skills.map((skill) => (
                  <SkillItem
                    key={skill.id}
                    src={skill.src}
                    alt={skill.alt}
                    title={skill.title}
                    subtitle={skill.subtitle}
                  />
                ))}
              </div>
              <div className='grid grid-cols-2 border-t py-1'>
                {skillsData.frameworks.map((framework) => (
                  <SkillItem
                    key={framework.id}
                    src={framework.src}
                    alt={framework.alt}
                    title={framework.title}
                    subtitle={framework.subtitle}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-col p-2'>
            <h3 className='pb-5 text-3xl font-bold text-gray-700'>Repository</h3>
            {repositoriesData.repositories.map((repo) => (
              <button
                key={repo.id}
                className='flex flex-row rounded-md border bg-gray-800 p-2 mb-2 cursor-pointer transition duration-300 hover:bg-gray-700'
                onClick={() => router.push(repo.url)}
                aria-label={`View ${repo.name} repository`}
              >
                <img src={repo.icon} alt='GitHub' width={40} height={40} className='h-10 w-10' />
                <div>
                  <p className='px-2 font-bold text-white text-left'>{repo.name}</p>
                  <p className='px-2 text-sm font-bold text-gray-400'>{repo.description}</p>
                </div>
              </button>
            ))}
            <button
              className='cursor-pointer p-3 text-end text-gray-700 transition duration-500 hover:scale-105 hover:text-gray-900'
              onClick={() => router.push(repositoriesData.moreUrl)}
              aria-label='View all repositories'
            >
              and more...
            </button>
          </div>
        </section>

        {/* Zenn Section */}
        <section
          className='flex h-screen snap-start flex-col bg-gray-100 p-2 text-black'
          id='zenn'
          aria-label='Zenn articles section'
        >
          <div className='flex flex-col p-2'>
            <h2 className='text-4xl font-bold text-gray-700'>
              Zenn <span className='text-sm text-gray-500'>記事</span>
            </h2>

            {/* User data */}
            <button
              className='flex flex-row rounded-md p-2 shadow-md transition duration-500 hover:scale-105 hover:shadow-lg'
              onClick={() => router.push('https://zenn.dev/hrtk92')}
              aria-label="Visit HRTK92's Zenn profile"
            >
              {zennUser.user.avatar_url && (
                <img
                  src={zennUser.user.avatar_url}
                  alt='HRTK92'
                  width={48}
                  height={48}
                  className='h-12 w-12 rounded-full transition duration-500 hover:scale-105'
                />
              )}
              <div className='p-1'>
                <p className='px-1 font-bold text-gray-800'>{zennUser.user.name}</p>
                <p className='px-1 text-sm font-bold text-gray-600 transition duration-500 hover:text-pink-400'>
                  <Heart className='inline-block h-4 w-4' />
                  {zennUser.user.total_liked_count}
                </p>
              </div>
            </button>

            {/* Articles */}
            <div className='grid grid-cols-2 md:grid-cols-4' role='list'>
              {zennFeed.items.map((item: any) => (
                <div className='p-2' key={item.guid} role='listitem'>
                  <button
                    className='flex-none rounded-xl bg-gray-200 p-1 shadow-sm transition duration-500 hover:scale-105 hover:bg-blue-400 w-full'
                    onClick={() => {
                      setTimeout(() => router.push(item.link), 500)
                    }}
                    aria-label={`Read article: ${item.title}`}
                  >
                    {item.enclosure?.link && (
                      <img
                        src={item.enclosure.link}
                        alt={item.title}
                        width={200}
                        height={200}
                        className='rounded-lg w-full h-auto'
                        loading='lazy'
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col p-2'>
            <h3 className='text-4xl font-bold text-gray-700'>
              OSS <span className='text-sm text-gray-500'>活動</span>
            </h3>
          </div>
          <div className='flex flex-col'>
            <div className='grid grid-cols-2 md:grid-cols-4' role='list'>
              {ossData.ossContributions.map((contribution) => (
                <div className='p-2' key={contribution.id} role='listitem'>
                  <button
                    className='flex-none rounded-xl bg-gray-200 p-1 shadow-sm transition duration-500 hover:scale-105 hover:bg-blue-400 w-full'
                    onClick={() => {
                      setTimeout(() => router.push(contribution.url), 500)
                    }}
                    aria-label={contribution.description}
                  >
                    <img
                      src={contribution.image}
                      alt={contribution.title}
                      width={200}
                      height={200}
                      className='rounded-lg w-full h-auto'
                      loading='lazy'
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className='p-1 text-gray-500 font-bold'>今までに貢献したリポジトリ</div>
            <div className='flex flex-row p-2 rounded-md border'>
              {ossData.organizations.map((org) => (
                <button
                  key={org.id}
                  onClick={() => router.push(org.url)}
                  aria-label={`Visit ${org.name} GitHub organization`}
                >
                  <img
                    src={org.avatar}
                    alt={org.name}
                    width={40}
                    height={40}
                    className='p-1 rounded-full'
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
