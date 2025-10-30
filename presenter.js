class TripPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.filteredTrips = this.model.getTrips();
  }

  init() {
    this.view.renderTrips(this.model.getTrips());

    this.view.bindAddTrip(this.handleAddTrip.bind(this));
    this.view.bindDeleteTrip(this.handleDeleteTrip.bind(this));
    this.view.bindEditTrip(this.handleEditTrip.bind(this));
    this.view.bindDateFilter(this.handleDateFilter.bind(this));
  }

  handleAddTrip(tripData) {
    this.model.addTrip(tripData);
    this.view.renderTrips(this.model.getTrips());
  }

  handleDeleteTrip(id) {
    this.model.deleteTrip(id);
    this.view.renderTrips(this.model.getTrips());
  }

  handleEditTrip(id, updatedData) {
    this.model.updateTrip(id, updatedData);
    this.view.renderTrips(this.model.getTrips());
  }

  handleDateFilter(start, end) {
    const filtered = this.model.filterTripsByDate(start, end);
    this.view.renderTrips(filtered);
  }
}

window.TripPresenter = TripPresenter;