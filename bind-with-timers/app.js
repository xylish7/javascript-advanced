class CounterWithBind {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log(this);
    console.log(this.count);
  }

  startTimer() {
    // If this is not bound, this will be the window object
    setInterval(this.increment.bind(this), 1000);
  }
}

class CounterWithArrowFunction {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log(this);
    console.log(this.count);
  }

  startTimer() {
    // If this is not bound, this will be the window object
    setInterval(() => this.increment(), 1000);
  }
}

const counterWithBind = new CounterWithBind();
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => counterWithBind.startTimer());

const counterWithArrowFunction = new CounterWithArrowFunction();
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => counterWithArrowFunction.startTimer());
