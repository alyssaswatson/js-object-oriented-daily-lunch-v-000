// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = neighborhoodId++;
    store.neighborhood.push(this);
  }
  deliveries() {
    return store.deliveries.filter(trip => {
      return trip.neighborhoodId == this.id;
    });
  }
}
