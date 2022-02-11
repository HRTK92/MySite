function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="https://avatars.githubusercontent.com/u/70054655?v=4" className="w-10 h-10 text-white p-2 rounded-full"/>
          <span className="ml-3 text-xl">HRTK92</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <a href="https://github.com/HRTK92" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@HRTK92</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        </span>
      </div>
    </footer>
  )
}

export default Footer;