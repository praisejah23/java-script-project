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
 fullNameInput = document.getElementById('fullName');
 phoneNumberInput = document.getElementById('phoneNumber');
 emailInput = document.getElementById('email');
 addressInput = document.getElementById('address');
 purposeInput = document.getElementById('purpose');
 dateInput = document.getElementById('date');
 timeInput = document.getElementById('time');
 noteInput = document.getElementById('note');
 counselorInput = document.getElementById('counselor');


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

// Check counselor availability
let selectedDate = new Date(date.value);
let selectedDay = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
let selectedTime = time.value;
let selectedCounselor = counselor.value;

let availableSlots = counselorAvailability[selectedCounselor][selectedDay];
if (!availableSlots.includes(selectedTime)) {
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


 // Retrieve the values entered by the user
var fullNameValue = fullNameInput.value;
var phoneNumberValue = phoneNumberInput.value;
var emailValue = emailInput.value;
var addressValue = addressInput.value;
var purposeValue = purposeInput.value;
var dateValue = dateInput.value;
var timeValue = timeInput.value;
var counselorValue = counselorInput.value;
var noteValue = noteInput.value;

// Display the user inputs
var summaryHTML = `<h2>User Summary</h2>
   <p>Fullname: ${fullNameValue}</p>
   <p>Phone Number: ${phoneNumberValue}</p>
   <p>Email: ${emailValue}</p>
   <p>Address: ${addressValue}</p>
   <p>Purpose: ${purposeValue}</p>
   <p>Date: ${dateValue}</p>
   <p>Time: ${timeValue}</p>
   <p>Counselor: ${counselorValue}</p>`;

   userSummary.innerHTML = summaryHTML;

console.log('Appointment scheduled!');

}


function removeErr() {
  fullName.onfocus = () => {
    fullNameErr.innerHTML = '';
  };
  phoneNumber.onfocus = () => {
    phoneNumberErr.innerHTML = '';
  };
  purpose.onfocus = () => {
    purposeErr.innerHTML = '';
  };
  email.onfocus = () => {
    emailErr.innerHTML = '';
  };
  address.onfocus = () => {
    addressErr.innerHTML = '';
  };
  date.onfocus = () => {
    dateErr.innerHTML = '';
  };

  time.onfocus = () => {
    timeErr.innerHTML = '';
  };

  note.onfocus = () => {
    noteErr.innerHTML = '';
  };

}
removeErr();

  