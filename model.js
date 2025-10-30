class TripModel {
    constructor(trips = []) {
      this.trips = trips;
    }
  
    getTrips() {
      return this.trips;
    }
  
    addTrip(trip) {
      const newTrip = { id: Date.now(), ...trip };
      this.trips.push(newTrip);
      return newTrip;
    }
  
    deleteTrip(id) {
      this.trips = this.trips.filter(trip => trip.id !== id);
    }
  
    updateTrip(id, updatedData) {
      const index = this.trips.findIndex(trip => trip.id === id);
      if (index !== -1) {
        this.trips[index] = { ...this.trips[index], ...updatedData };
      }
    }
  
    filterTripsByDate(start, end) {
      if (!start && !end) return this.trips;
  
      return this.trips.filter(trip => {
        const tripDate = new Date(trip.date);
        const from = start ? new Date(start) : null;
        const to = end ? new Date(end) : null;
  
        return (!from || tripDate >= from) && (!to || tripDate <= to);
      });
    }
  }
  
  window.TripModel = TripModel;