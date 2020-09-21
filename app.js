new Vue({
  el: "#vue-app",
  data: {
    name: "Jillo Woche",
    job: "Software Developer",
    age: 30,
    website: "https://jillowoche.dev",
    websiteTag: '<a href="https://jillowoche.dev">Tagged website</a>',
    x: 0,
    y: 0,
  },
  methods: {
    greet: function (time) {
      return `Good ${time} ${this.name}!`;
    },
    addAge: function (inc) {
      return this.age+=inc;
    },
    subtractAge: function (dec) {
      return this.age-=dec;
    },
    updateXY: function(event){
        this.x = event.offsetX;
        this.y = event.offsetY;
    }
  },
});
