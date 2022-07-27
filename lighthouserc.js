module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'yarn start',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/articles',
        'http://localhost:3000/github/links',

    ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
