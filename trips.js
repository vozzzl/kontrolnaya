document.addEventListener("DOMContentLoaded", () => {
    const model = new TripModel(mockTrips);
    const view = new TripView();
    const presenter = new TripPresenter(model, view);

    presenter.init();
})