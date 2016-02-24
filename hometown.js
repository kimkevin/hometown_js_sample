var neighbor = {
  age : 0,

  init: function(age) {
    this.age = age;
  },

  isOlder: function(age) {
    return this.age < age;
  },

  isYounger: function (age) {
    return this.age > age;
  },

  isSame: function(age) {
    return this.age == age;
  },

  greet: function(age) {
    if (this.isOlder(age)) {
      console.log('Good Morning');
    } else if (this.isYounger(age)) {
      console.log('Hello');
    } else if (this.isSame(age)) {
      console.log('Hey');
    } else {
      console.log('Neighbor is not human');
    }
  },

  moveout: function(age) {
    const isOlder = this.age > age;
    if (isOlder) {
      console.log('Neighbor moved out');
    } else if (this.age == age) {
      console.log('We became neighbors');
    } else {
      console.log('I moved out');
    }
  },

  print: function() {
    console.log('Neighbor is ' + this.age + ' years old');
  }
}

neighbor.init(35);
//neighbor.greet(29);
//neighbor.moveout(29);

// 1. rename 14
// 2. isYounger : inline function -> extract method
// 3. kill : extract variable or extract method -> inline local variable