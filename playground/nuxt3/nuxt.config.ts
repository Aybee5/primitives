import { addComponent } from '@nuxt/kit'
import { globbySync } from 'globby'
import { resolve } from 'pathe'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    async () => {
      const components = globbySync('../../packages/components/**/src/stories/*Demo.vue', {
        ignore: ['**/node_modules/**', '**/dist/**', '**/node_modules/@oku-ui/**'],
        deep: 4,
      })
      if (components.length > 0) {
        components.forEach((component) => {
          // LabelDemo.vue -> LabelDemo
          addComponent({ filePath: resolve(component), name: component.split('/').pop()!.replace('.vue', ''), priority: 1 })
        })
      }

      const core = globbySync('../../packages/core/**/src/stories/*Demo.vue', {
        ignore: ['**/node_modules/**', '**/dist/**', '**/node_modules/@oku-ui/**'],
        deep: 4,
      })

      if (core.length > 0) {
        core.forEach((component) => {
          // LabelDemo.vue -> LabelDemo
          addComponent({ filePath: resolve(component), name: component.split('/').pop()!.replace('.vue', ''), priority: 2 })
        })
      }
    },
  ],
})
