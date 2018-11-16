<template>
  <div class="home">
    <Courses/>
  </div>
</template>

<script>
// @ is an alias to /src
import Courses from '@/components/Courses.vue'

export default {
  name: 'home',
  components: {
    Courses
  }
}
</script>
