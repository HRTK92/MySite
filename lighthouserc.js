module.exports = {
  ci: {
    collect: {
      numberOfRuns: 2,
      startServerCommand: 'yarn start',
      url: [
        'http://localhost:3000/MySite',
    ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
