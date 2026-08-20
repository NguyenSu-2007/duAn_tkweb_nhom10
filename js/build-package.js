export function initBuildPackage() {
  const form = document.getElementById("packageForm");
  if (!form) return;

  const start = document.getElementById("startDate");
  const end = document.getElementById("endDate");
  const guests = document.getElementById("guests");
  const error = document.getElementById("dateError");
  const duration = document.getElementById("tripDuration");
  const total = document.getElementById("totalPrice");
  const success = document.getElementById("packageSuccess");
  const pricePerDay = 100;

  const today = new Date().toISOString().split("T")[0];
  start.min = today;
  end.min = today;

  function calculate() {
    error.classList.add("hidden");
    success.classList.add("hidden");
    duration.textContent = "";
    total.textContent = "$0";
    if (!start.value || !end.value) return;

    const days = Math.ceil((new Date(end.value) - new Date(start.value)) / 86400000);

    if (days < 1) {
      error.textContent = "End Date must be after Start Date.";
      error.classList.remove("hidden");
      return;
    }

    total.textContent = "$" + (days * Number(guests.value) * pricePerDay).toLocaleString("en-US");
    duration.textContent = `${days} day${days > 1 ? "s" : ""} trip`;
  }

  start.addEventListener("change", () => {
    end.min = start.value;
    if (end.value && end.value < start.value) end.value = "";
    calculate();
  });

  end.addEventListener("change", calculate);
  guests.addEventListener("change", calculate);

  form.addEventListener("submit", e => {
    e.preventDefault();
    success.classList.add("hidden");

    if (!start.value || !end.value) {
      error.textContent = "Please select Start Date and End Date.";
      error.classList.remove("hidden");
      return;
    }

    const days = Math.ceil((new Date(end.value) - new Date(start.value)) / 86400000);

    if (days < 1) {
      error.textContent = "End Date must be after Start Date.";
      error.classList.remove("hidden");
      return;
    }

    const data = {
      destination: document.getElementById("destination").value,
      place: document.getElementById("place").value,
      startDate: start.value,
      endDate: end.value,
      days,
      guests: Number(guests.value),
      activities: [...form.querySelectorAll('input[type="checkbox"]:checked')].map(cb => cb.value),
      totalPrice: days * Number(guests.value) * pricePerDay
    };

    console.log("PACKAGE:", data);

    success.textContent = `✓ Package completed successfully! Total: $${data.totalPrice.toLocaleString("en-US")}`;
    success.classList.remove("hidden");
  });
}