<script setup lang="ts">
import { ref, watchEffect } from '#imports'

const props = withDefaults(defineProps<{
  name: string;
  filled?: boolean
}>(), { filled: false })


const icon = ref<string | Record<string, any>>('')
let hasStroke = false

async function getIcon () {
  try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
      as: 'raw',
      eager: false
    })
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()
    if (rawIcon.includes('stroke')) { hasStroke = true }
    icon.value = rawIcon
  } catch {
    console.error(
      `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
    )
  }
}

await getIcon()

watchEffect(getIcon)
</script>
<template>
  <span
    class="nuxt-icon"
    :class="{ 'nuxt-icon--fill': !filled, 'nuxt-icon--stroke': hasStroke && !filled }"
    v-html="icon"
  />
</template>

