<template>
  <div class="pt-16">
    <AppHeader />

    <main class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-wrap relative">
        <AppNav />

        <Nuxt class="w-full lg:w-4/5" />
      </div>
    </main>

    <!-- <AppFooter /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    const previewUrl = this.settings.url.replace(/\/$/, '') + '/preview.png'
    return {
      titleTemplate: (chunk) => {
        if (chunk) {
          return `${chunk} - ${this.settings.title}`
        }
        return this.settings.title
      },
      bodyAttrs: {
        class: [
          ...this.bodyClass,
          'antialiased text-gray-700 leading-normal bg-white dark:bg-gray-900 dark:text-gray-300'
        ]
      },
      ...i18nHead,
      meta: (i18nHead.meta || []).concat([
        // Open Graph
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: this.settings.title
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: this.settings.url },
        { hid: 'og:image', property: 'og:image', content: previewUrl },
        // Twitter Card
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: this.settings.twitter
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.settings.title
        },
        { hid: 'twitter:image', name: 'twitter:image', content: previewUrl },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.settings.title
        }
      ])
    }
  },
  computed: {
    ...mapGetters(['settings']),
    bodyClass() {
      return []
    }
  }
}
</script>
