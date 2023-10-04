<template>
  <TheHeader>
    <template v-slot:titulo>
      <h1 class="header-title">Vue.js</h1>
    </template>
    <template v-slot:descricao>
      <p class="header-description">Curso de Vue.js</p>
    </template>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis necessitatibus cumque, tempora ipsum quos laborum
    omnis quasi eos accusamus sequi? Repellat sequi numquam provident perferendis temporibus consequatur quae molestiae
    at.
  </TheHeader>

  <main>
    <BaseCard>

    </BaseCard>

    <BaseAlert type="success" />
  </main>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';
import TheHeader from '@/components/TheHeader.vue'
import BaseAlert from '@/components/BaseAlert.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    BaseCard,
    BaseAlert
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
