class TripView {
  constructor() {
    this.tripList = document.getElementById("trip-list");
    this.form = document.getElementById("trip-form");
    this.startfilter = document.getElementById("filter-start");
    this.endfilter = document.getElementById("filter-end");
  }

  bindAddTrip(handler) {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      const destination = document.getElementById("trip-destination").value.trim();
      const date = document.getElementById("trip-date").value;
      const notes = document.getElementById("trip-notes").value.trim();
      const status = document.querySelector('input[name="trip-status"]:checked')?.value || "Запланировано"

      if (!destination || !date) return;

      handler({ destination, date, notes, status });
      this.form.reset();
    });
  }

  bindDeleteTrip(handler) {
    this.tripList.addEventListener("click", event => {
      if (event.target.classList.contains("delete-btn")) {
        const id = Number(event.target.dataset.id);
        handler(id);
      }
    });
  }

  renderTrips(trips) {
    this.tripList.innerHTML = "";

    if (trips.length === 0) {
      this.tripList.innerHTML = "<li>Нет поездок</li>";
      return;
    }

    trips.forEach(trip => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <strong>${trip.destination}</strong> — ${trip.date}
          <p>${trip.notes || ""}</p>
        </div>
        <button class="delete-btn" data-id="${trip.id}">Удалить</button>
      `;
      this.tripList.appendChild(li);
    });
  }
}

window.TripView = TripView;