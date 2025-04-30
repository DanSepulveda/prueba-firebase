// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['imagekit.io']
  },
  adapter: cloudflare(),
  output: 'server'
})
