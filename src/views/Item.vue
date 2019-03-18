<template>
  <section class="item container-fluid">
    <div class="row">
      <div class="col">
        <img :src="activeItem.images.transparent">
        <h1>{{activeItem.name}}</h1>
        <h6>{{activeItem.description}}</h6>
        <h1>{{activeItem.cost}} V-bucks</h1>
        <h1>Total Times in Store:{{activeItem.occurrences.occurrences}}</h1>
        <h1>Last Seen:{{activeItem.occurrences.last}}</h1>
        <h1>Debut Date:{{activeItem.occurrences.first}}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "item",
  mounted() {
    if (!this.activeItem.itemid) {
      this.$store.dispatch("setActiveItem", this.$route.params.id);
    }
  },
  props: [],
  data() {
    return {};
  },
  computed: {
    activeItem() {
      return this.$store.state.activeItem;
    }
  },
  methods: {},
  components: {}
};
</script>