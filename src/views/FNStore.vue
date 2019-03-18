<template>
  <section class="store container-fluid">
    <div class="row">
      <div class="col-md-2" v-for="item in storeItems" :key="item.itemid">
        <div class="card">
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
  methods: {},
  components: {}
};
</script>