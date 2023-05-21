const obj = {
  value: 10,
  myFunction: function () {
    console.log(this.value);
  },
  myArrowFunction: () => {
    console.log(this.value);
  },
};

obj.myFunction(); // 10
obj.myArrowFunction(); // undefined


