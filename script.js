// Simulating a simple login system
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginSection = document.getElementById('login-section');
const heroSection = document.getElementById('hero-section');
const logoutSection = document.getElementById('logout-section');

// Dummy login data
const users = [{ username: 'user1', pin: '123456' }];

// Login function
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const pin = document.getElementById('pin').value;

  const user = users.find((u) => u.username === username && u.pin === pin);

  if (user) {
    alert('Login Successful');
    loginSection.classList.add('hidden');
    heroSection.classList.remove('hidden');
    logoutSection.classList.remove('hidden');
    loginBtn.classList.add('hidden');
  } else {
    alert('Invalid credentials');
  }
});

// Logout function
logoutBtn.addEventListener('click', function () {
  heroSection.classList.add('hidden');
  logoutSection.classList.add('hidden');
  loginSection.classList.remove('hidden');
  loginBtn.classList.remove('hidden');
});

// Interest Calculation based on loan duration (15 days or 30 days)
document.getElementById('amount').addEventListener('input', calculateLoan);
document.getElementById('loan_duration').addEventListener('change', calculateLoan);

function calculateLoan() {
  const amount = parseFloat(document.getElementById('amount').value);
  const loanDuration = document.getElementById('loan_duration').value;
  const interestRate = 10 / (loanDuration === '15' ? 2 : 1); // 10% for 30 days, 5% for 15 days

  if (!isNaN(amount)) {
    const interestPayable = (amount * interestRate) / 100;
    const repayableAmount = amount + interestPayable;

    document.getElementById('interest_payable').value = interestPayable.toFixed(2);
    document.getElementById('repayable_amount').value = repayableAmount.toFixed(2);
  }
}

// Account Number Validation (restrict to 10 digits and fetch account name)
document.getElementById('beneficiary_account_number').addEventListener('input', function () {
  const accountNumber = this.value;

  if (/^\d{10}$/.test(accountNumber)) {
    // Simulating account name fetch
    document.getElementById('beneficiary_account_name').value = 'John Doe'; // Replace with API call to fetch actual account name
  } else {
    document.getElementById('beneficiary_account_name').value = '';
  }
});

// Capture Portrait Picture using Camera
document.getElementById('portrait_picture').addEventListener('click', function () {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      alert('Face capture completed.');
      // Implement logic to capture photo here and stop stream
    })
    .catch((error) => {
      alert('Camera access denied');
    });
});

// Scan Staff ID Card using Camera (Front and Back)
document.getElementById('staff_id_card_front').addEventListener('click', function () {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      alert('ID Card front scan completed.');
      // Implement logic to capture photo here and stop stream
    })
    .catch((error) => {
      alert('Camera access denied');
    });
});

document.getElementById('staff_id_card_back').addEventListener('click', function () {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      alert('ID Card back scan completed.');
      // Implement logic to capture photo here and stop stream
    })
    .catch((error) => {
      alert('Camera access denied');
    });
});

// Salary History Validation
document.getElementById('salaryForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const salaryEntries = document.querySelectorAll('.salary-entry');

  let allFieldsFilled = true;
  salaryEntries.forEach((entry) => {
    const inputs = entry.querySelectorAll('input');
    inputs.forEach((input) => {
      if (!input.value) {
        allFieldsFilled = false;
      }
    });
  });

  if (allFieldsFilled) {
    alert('Salary history submitted successfully');
  } else {
    alert('Please fill in all salary fields.');
  }
});

// File upload validation
document.getElementById('uploadForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const accountStatement = document.getElementById('account_statement').files[0];
  const staffIdCardFront = document.getElementById('staff_id_card_front').files[0];
  const staffIdCardBack = document.getElementById('staff_id_card_back').files[0];
  const nationalIdCard = document.getElementById('national_id_card').files[0];
  const portraitPicture = document.getElementById('portrait_picture').files[0];

  if (accountStatement && staffIdCardFront && staffIdCardBack && nationalIdCard && portraitPicture) {
    alert('Documents uploaded successfully.');
  } else {
    alert('Please upload all required documents.');
  }
});
// Capture Portrait Picture using Camera and Display Preview
document.getElementById('portrait_picture').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.getElementById('portrait_preview');
        img.src = e.target.result;
        img.classList.remove('hidden');
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  });
  
  // Scan Staff ID Card Front and Display Preview
  document.getElementById('staff_id_card_front').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.getElementById('staff_id_front_preview');
        img.src = e.target.result;
        img.classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Scan Staff ID Card Back and Display Preview
  document.getElementById('staff_id_card_back').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.getElementById('staff_id_back_preview');
        img.src = e.target.result;
        img.classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Additional code for other functionalities...
  