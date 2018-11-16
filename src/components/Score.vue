<template>
  <div>
    <p class="course">{{ course }}</p>
    <p class="date">{{ date }}</p>
    <p class="score">{{ score }}</p>
    <p class="par">{{ par }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      course: String,
      date: String,
      score: Number,
      par: Number
    }
  }
</script>
