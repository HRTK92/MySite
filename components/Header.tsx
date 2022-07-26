import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-blue-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'} passHref>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-white">HRTK92</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/articles"}>
            <a className="mr-5 text-white hover:text-gray-900">記事</a>
          </Link>
        </nav>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/links'}>
            <a className="mr-5 text-white hover:text-gray-900">リンク集</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
