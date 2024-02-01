<script setup>

</script>

<template>
  <NuxtLayout>
    <main class="page__content">
      <div class="container error-container">
        <h1 class="title title--xl">404</h1>
        <div class="title title--l">Page Not Found</div>
        <NuxtLink to="/" class="btn btn--primary">вернуться на главную</NuxtLink>
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 24px;
}
</style>
