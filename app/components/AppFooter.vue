<script setup lang="ts">
import { img } from '#build/ui/prose';

const { footer } = useAppConfig()
</script>

<template>
  <UFooter
    class="z-10 bg-default"
    :ui="{ left: 'text-muted text-xs flex-wrap whitespace-nowrap', right: 'space-x-2' }"
  >
    <template #left>
      {{ footer.credits }}
      <a href="https://beian.miit.gov.cn" target="_blank" rel="noreferrer">
        {{ footer.register }}
      </a>
      <span class="inline-flex items-center gap-x-1">
        <NuxtImg src="/local/备案图标.png" alt="备案图标" sizes="14px"/>
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=50010602505365"
          target="_blank" rel="noreferrer">
          {{ footer.policeRegister }}
        </a>
      </span>
    </template>

    <template #right>
      <template v-if="footer?.links">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'xs', color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>
  </UFooter>
</template>
