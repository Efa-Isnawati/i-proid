class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }
// DOM
  render() {
    return `
    <div class=" card m-3" style="height:90vh;">
    <img src="${this.image}" alt="${this.manufacture}" class="img-fluid" style="height:200px; object-fit:cover;" />
        <div class="card-body" style="position:relative;">
        <p>${this.model}</p>
        <h5>Rp ${this.rentPerDay} / hari</h5>
        <p>
          ${this.description}
        </p>
        <ul class="list-unstyled">
          <li><i class="fas fa-user-friends"></i> ${this.capacity}</li>
          <li><i class="fas fa-user-cog"></i> ${this.transmission}</li>
          <li><i class="fa fa-calendar"></i> ${this.year}</li>
        </ul>
        <button class="btn w-100 btn-success" style="position:absolute; bottom:0; left:0; right:0;">Pilih Mobil</button>
        </div>
        </div>
    `;
  }
}
