class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("find");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    // this.loadButton.addEventListener("click",()=>{this.filterCar()});
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList += 'col-md-4'
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    this.clear()
    var typeofDriver = document.getElementById('typeOfDriver')
    var inputDate = document.getElementById('inputDate')
    var inputTime = document.getElementById('inputTime')
    var jumlahCustInput = document.getElementById('customers')

    const cars = await Binar.listCars()
    const carsFilter = cars.filter((car) => {
      var tipeDriver = typeofDriver.value == '1'
      var date = inputDate.value
      var time = inputTime.value
      var InputDateTime = new Date(date + ' ' + time)
      var Available = InputDateTime.getTime() - car.availableAt.getTime()
      var customers = jumlahCustInput.value
      if (date) {
        if (customers)
          return (
            tipeDriver == car.available &&
            Available > 0 &&
            car.capacity >= parseInt(customers)
          )
        return Available > 0 && tipeDriver == car.available
      }

      return car
    })
    Car.init(carsFilter)
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild

    while (child) {
      child.remove()
      child = this.carContainerElement.firstElementChild
    }
  }
}
