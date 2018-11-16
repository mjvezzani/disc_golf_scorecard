<template>
  <div>
    <p class="par">{{ par }}</p>
    <p class="distance">{{ distance }}</p>
    <input type="text" class="score"></input>
  </div>
</template>

<script>
  export default {
    props: {
      par: Number,
      distance: Number,
    }
  }
</script>
