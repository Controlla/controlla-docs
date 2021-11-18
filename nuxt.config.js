import theme from '@nuxt/content-theme-docs'

export default theme({
  server: {
    host: '0',
    port: 8080 // default: 3000
  },
  docs: {
    primaryColor: '#5A0FC8'
  },
  loading: { color: '#5A0FC8' },
  pwa: {
    manifest: {
      name: 'Controlla Docs'
    }
  }
})
