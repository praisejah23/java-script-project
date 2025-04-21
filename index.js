
  function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  window.addEventListener('resize', setVh);
  window.addEventListener('load', setVh);
// Define counselor availability
let counselorAvailability = {
  "Bethel": {
    "Monday": ["9:00 AM", "12:00 PM", "2:00 PM"],
    "Tuesday": ["9:00 AM", "12:00 PM"],
    "Wednesday": ["2:00 PM", "4:00 PM"],
    "Thursday": ["9:00 AM", "12:00 PM", "2:00 PM"],
    "Friday": ["9:00 AM", "12:00 PM"],
  },
  "Justice": {
    "Monday": ["9:00 AM", "12:00 PM"],
    "Tuesday": ["2:00 PM", "4:00 PM"],
    "Wednesday": ["9:00 AM", "12:00 PM", "2:00 PM"],
    "Thursday": ["9:00 AM", "12:00 PM"],
    "Friday": ["2:00 PM", "4:00 PM"],
  },
  "Jahswill": {
    "Monday": ["9:00 AM", "12:00 PM", "2:00 PM"],
    "Tuesday": ["9:00 AM", "12:00 PM"],
    "Wednesday": ["9:00 AM", "12:00 PM"],
    "Thursday": ["2:00 PM", "4:00 PM"],
    "Friday": ["9:00 AM", "12:00 PM", "2:00 PM"],
  },
};

// Define counselor slot assignment count
let counselorSlotCount = {
  "Bethel": 0,
  "Justice": 0,
  "Jahswill": 0,
};

// Get form elements
let form = document.querySelector('.form');
let fullNameInput = document.getElementById('fullName');
let phoneNumberInput = document.getElementById('phoneNumber');
let emailInput = document.getElementById('email');
let addressInput = document.getElementById('address');
let purposeInput = document.getElementById('purpose');
let dateInput = document.getElementById('date');
let timeInput = document.getElementById('time');
let noteInput = document.getElementById('note');
let counselorInput = document.getElementById('counselor');
let userSummary = document.getElementById('userSummary');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});


function validateForm() {
  if (fullNameInput.value === '' || fullNameInput.value === null) {
    fullNameErr.innerHTML = 'Please enter your full name';
    fullNameErr.classList.add('errormsg');
    return false;
  }

  if (phoneNumberInput.value === '') {
    phoneNumberErr.innerHTML = 'Please enter your phone number';
    phoneNumberErr.classList.add('errormsg');
    return false;
  }

  if (emailInput.value === '') {
    emailErr.innerHTML = 'Please enter a valid email address';
    emailErr.classList.add('errormsg');
    return false;
  }

  if (addressInput.value === '') {
    addressErr.innerHTML = 'Please enter your address';
    addressErr.classList.add('errormsg');
    return false;
  }

  if (purposeInput.value === '' || purposeInput.value === null) {
    purposeErr.innerHTML = 'Please select a consultation purpose';
    purposeErr.classList.add('errormsg');
    return false;
  }

  if (dateInput.value === '' || dateInput.value === null) {
    dateErr.innerHTML = 'Please insert date';
    dateErr.classList.add('errormsg');
    return false;
  }

  if (timeInput.value === '' || timeInput.value === null) {
    timeErr.innerHTML = 'Please select time';
    timeErr.classList.add('errormsg');
    return false;
  }

  if (counselorInput.value === '') {
    counselorErr.innerHTML = 'Please select a counselor';
    counselorErr.classList.add('errormsg');
    return false;
  }

  if (noteInput.value === '') {
    noteErr.innerHTML = 'Please explain further';
    noteErr.classList.add('errormsg');
    return false;
  }

  // Check if the selected day is within Monday to Friday
  let selectedDate = new Date(dateInput.value);
  let selectedDay = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
  let selectedTime = timeInput.value;
  let selectedCounselor = counselorInput.value;

  // List of valid days for counseling sessions
  const validDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Check if the selected day is within Monday to Friday
  if (!validDays.includes(selectedDay)) {
    dateErr.innerHTML = 'Sessions can only be booked from Monday to Friday. Please choose a valid date.';
    dateErr.classList.add('errormsg');
    return false;
  }

  // Check counselor availability on the selected day and time
  let availableSlots = counselorAvailability[selectedCounselor][selectedDay];
  if (!availableSlots || !availableSlots.includes(selectedTime)) {
    timeErr.innerHTML = 'The selected time is not available for the chosen counselor.';
    timeErr.classList.add('errormsg');
    return false;
  }

  // Check counselor slot assignment count
  if (counselorSlotCount[selectedCounselor] >= 3) {
    counselorErr.innerHTML = 'The chosen counselor has already been assigned the maximum number of slots.';
    counselorErr.classList.add('errormsg');
    return false;
  }

  // Update slot assignment count
  counselorSlotCount[selectedCounselor]++;

  // Retrieve and display the user inputs
  let summaryHTML = `<h2>APOINTMENT DETAILS</h2>
    <p>Fullname: ${fullNameInput.value}</p>
    <p>Phone Number: ${phoneNumberInput.value}</p>
    <p>Email: ${emailInput.value}</p>
    <p>Address: ${addressInput.value}</p>
    <p>Purpose: ${purposeInput.value}</p>
    <p>Date: ${dateInput.value}</p>
    <p>Time: ${timeInput.value}</p>
    <p>Counselor: ${counselorInput.value}</p>`;

  userSummary.innerHTML = summaryHTML;
  console.log('Appointment scheduled!');
  alert("Appointment Booked!")
}

function removeErr() {
  fullNameInput.onfocus = () => {
    fullNameErr.innerHTML = '';
  };
  phoneNumberInput.onfocus = () => {
    phoneNumberErr.innerHTML = '';
  };
  purposeInput.onfocus = () => {
    purposeErr.innerHTML = '';
  };
  emailInput.onfocus = () => {
    emailErr.innerHTML = '';
  };
  addressInput.onfocus = () => {
    addressErr.innerHTML = '';
  };
  dateInput.onfocus = () => {
    dateErr.innerHTML = '';
  };

  timeInput.onfocus = () => {
    timeErr.innerHTML = '';
  };

  noteInput.onfocus = () => {
    noteErr.innerHTML = '';
  };
}

removeErr();
