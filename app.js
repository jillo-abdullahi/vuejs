new Vue({
  el: "#vue-app",
  data: {
    name: "Jillo Woche",
    job: "Software Developer",
    website: "https://jillowoche.dev",
    websiteTag: '<a href="https://jillowoche.dev">Tagged website</a>',
  },
  methods: {
    greet: function (time) {
      return `Good ${time} ${this.name}!`;
    },
  },
});
