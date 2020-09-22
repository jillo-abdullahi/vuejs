new Vue({
  el: "#vue-app",
  data: {
    name: "",
    job: "Software Developer",
    age: 20,
    website: "https://jillowoche.dev",
    websiteTag: '<a href="https://jillowoche.dev">Tagged website</a>',
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false
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
      this.name = event.target.value;
    },
    logAge: function () {
      console.log("You entered your age");
      this.age = event.target.value;
    },
    // addToA: function(){
    //   return this.age + this.a
    // },
    // addToB: function(){
    //   return this.age + this.b

    // }
  },
  computed: {
    addToA: function () {
      return this.age + this.a;
    },
    addToB: function () {
      return this.age + this.b;
    },
    compClasses: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  },
});
