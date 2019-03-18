<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <img src="@/assets/galaxy.png">-->
    <table class="table table-striped table-hover table-dark">
      <thead class>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Challenge</th>
          <th scope="col">Total required</th>
          <th scope="col">Stars</th>
          <th scope="col">Difficulty</th>
        </tr>
      </thead>
      <tbody v-for="(week, index) in challenges">
        <td v-if="week.length > 0">{{index}}</td>
        <tr v-for="(challenge, index) in week" data-toggle="collapse" data-target="#hey" class="clickable">
          <th scope="row">{{index + 1}}</th>
          <td>{{challenge.challenge}}</td>
          <td>{{challenge.total}}</td>
          <td>{{challenge.stars}}</td>
          <td>{{challenge.difficulty}}</td>
          <td>
            <div id="hey" class="collapse">Hidden by default</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  // @ is an alias to /src

  export default {
    name: "home",
    computed: {
      challenges() {
        return this.$store.state.challenges;
      }
    },
    components: {}
  };
</script>