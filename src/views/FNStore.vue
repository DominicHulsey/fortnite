<template>
  <section class="store container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-3 col-lg-2" v-for="item in storeItems" :key="item.itemid">
        <div class="card" @click="setActiveItem(item.itemid); $router.push({name: 'item', params:{id: item.itemid}})">
          <img class="card-img-top" :src="item.item.images.information" alt="Card image cap">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "store",
    props: [],
    data() {
      return {};
    },
    computed: {
      storeItems() {
        return this.$store.state.storeItems;
      }
    },
    methods: {
      setActiveItem(itemId) {
        this.$store.dispatch("setActiveItem", itemId);
      }
    },
    components: {}
  };
</script>

<style>
  .card:hover {
    cursor: pointer;
    border: 5px solid white;
  }
</style>