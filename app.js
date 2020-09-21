new Vue({
  el: "#vue-app",
  data: {
    name: "Jillo Woche",
    job: "Plumber"
  },
  methods: {
      greet: function(time){
        return `Good ${time} ${this.name}!`
      }
  }
});
