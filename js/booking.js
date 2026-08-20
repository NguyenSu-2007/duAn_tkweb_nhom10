export function initBooking() {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const $ = id => document.getElementById(id);
  const [email, confirm, phone, date, tickets, msg, total] = [
    $("bookingEmail"), $("confirmEmail"), $("bookingPhone"), 
    $("bookingDate"), $("bookingTickets"), $("bookingMessage"), $("totalPrice")
  ];

  const showMsg = (txt, type = "error") => {
    msg.textContent = txt;
    msg.className = `text-xs ${type === "error" ? "text-red-500" : "text-green-500"}`;
  };

  const updateTotal = () => total && (total.textContent = `$${(Number(tickets?.value) || 0) * 100}`);
  tickets?.addEventListener("input", updateTotal);
  updateTotal();

  $("checkAvailability")?.addEventListener("click", () => showMsg("This tour is available!", "success"));

  form.addEventListener("submit", e => {
    e.preventDefault();

    if (!form.checkValidity()) return showMsg("Please fill in all required fields.");

    const emailVal = email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) return showMsg("Invalid email format.");
    if (emailVal !== confirm.value.trim()) return showMsg("Emails do not match.");

    if (!/^[0-9]{9,11}$/.test(phone.value.trim())) return showMsg("Please enter a valid phone number.");

    if (!/^\d{2}[-/]\d{2}[-/]\d{4}$/.test(date.value.trim())) return showMsg("Date must be in dd/mm/yyyy or dd-mm-yyyy format.");

    const ticketCount = Number(tickets.value);
    if (ticketCount < 1) return showMsg("Number of tickets must be at least 1.");

    showMsg(`Your tour has been booked successfully! Total: $${ticketCount * 100}`, "success");
  });
}
