new Vue({
  el: "#vue-app",
  data: {
    name: "",
    job: "Software Developer",
    age: "",
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
      return (this.age += inc);
    },
    subtractAge: function (dec) {
      return (this.age -= dec);
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      alert("This event took over the default Click event.");
    },
    logName: function (event) {
      // console.log(event.target.value);
      this.name = event.target.value
      
    },
    logAge: function () {
      console.log("You entered your age");
      this.age = event.target.value
    },
  },
});
