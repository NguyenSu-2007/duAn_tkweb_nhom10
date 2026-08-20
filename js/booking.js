export function initBooking(){ 
  const form=document.getElementById("bookingForm"); 
  if(!form)return; 
  const email=document.getElementById("bookingEmail"); 
  const confirmEmail=document.getElementById("confirmEmail"); 
  const phone=document.getElementById("bookingPhone"); 
  const date=document.getElementById("bookingDate"); 
  const tickets=document.getElementById("bookingTickets"); 
  const message=document.getElementById("bookingMessage"); 
  const check=document.getElementById("checkAvailability"); 
  const total=document.getElementById("totalPrice"); 

  function updateTotal(){ 
    const amount=Number(tickets.value)||0; 
    total.textContent=`$${amount*100}`; 
  } 

  function showMessage(text,type="error"){ 
    message.textContent=text; 
    message.className=`text-xs ${type==="error"?"text-red-500":"text-green-500"}`; 
  } 

  tickets.addEventListener("input",updateTotal); 
  updateTotal(); 

  check?.addEventListener("click",()=>{ 
    showMessage("This tour is available!","success"); 
  }); 

  form.addEventListener("submit",e=>{ 
    e.preventDefault(); 
    const emailValue=email.value.trim(); 
    const confirmEmailValue=confirmEmail.value.trim(); 
    console.log("Email:",emailValue); 
    console.log("Confirm:",confirmEmailValue); 

    if(!form.checkValidity()){ 
      showMessage("Please fill in all required fields."); 
      return; 
    } 

    if(!/^[0-9]{9,11}$/.test(phone.value.trim())){ 
      showMessage("Please enter a valid phone number."); 
      return; 
    } 

    // ĐÃ CẬP NHẬT: Chấp nhận cả dấu - và /
    if(!/^\d{2}[-/]\d{2}[-/]\d{4}$/.test(date.value.trim())){ 
      showMessage("Date must be in dd/mm/yyyy or dd-mm-yyyy format."); 
      return; 
    } 

    if(Number(tickets.value)<1){ 
      showMessage("Number of tickets must be at least 1."); 
      return; 
    } 

    showMessage(`Your tour has been booked successfully! Total: $${Number(tickets.value)*100}`,"success"); 
  }); 
}
