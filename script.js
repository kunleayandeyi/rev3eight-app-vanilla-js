let loggedIn = false;

// Dummy bank account validation logic (Replace with real API call)
function getAccountName(accountNumber) {
    const bankAccounts = {
        '1234567890': 'John Doe',
        '0987654321': 'Jane Smith',
        '1111222233': 'Alex Johnson'
    };
    return bankAccounts[accountNumber] || 'Account not found';
}

// Handle Login Process
document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const pin = document.getElementById('pin').value;
    
    if (username && pin.length === 6) {
        loggedIn = true;
        alert('Login Successful');
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('requestSection').style.display = 'none';
    } else {
        alert('Invalid login. Please enter a valid username and 6-digit PIN.');
    }
});

// Show request section if logged in
document.getElementById('headerRequests').addEventListener('click', function () {
    if (loggedIn) {
        document.getElementById('requestSection').style.display = 'block';
    } else {
        alert('Please login to view this section.');
    }
});

document.getElementById('requestsLink').addEventListener('click', function () {
    if (loggedIn) {
        document.getElementById('requestSection').style.display = 'block';
    } else {
        alert('Please login to view this section.');
    }
});

// Calculate interest and total amount payable based on loan duration
document.getElementById('loanDuration').addEventListener('change', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const duration = document.getElementById('loanDuration').value;
    
    let interestRate = 0;
    if (duration == '15') {
        interestRate = 0.07; // 7% for 15 days
    } else if (duration == '30') {
        interestRate = 0.15; // 15% for 30 days
    }
    
    const interestPayable = amount * interestRate;
    document.getElementById('interestPayable').value = interestPayable.toFixed(2);
    document.getElementById('amountPayable').value = (amount + interestPayable).toFixed(2);
});

// Handle account number validation and auto-fetch account name
document.getElementById('accountNumber').addEventListener('input', function () {
    const accountNumber = document.getElementById('accountNumber').value;
    if (accountNumber.length === 10) {
        const accountName = getAccountName(accountNumber);
        document.getElementById('accountName').value = accountName;
    }
});

// Handle face recognition and preview captured image
document.getElementById('faceRecognition').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function (e) {
        const img = document.getElementById('capturedImagePreview');
        img.src = e.target.result;
        img.style.display = 'block';
        alert('Face scan completed.');
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
});

// Handle form submission
document.getElementById('submitRequestForm').addEventListener('click', function (event) {
    event.preventDefault();
    
    if (loggedIn) {
        alert('Form Submitted Successfully!');
        // Implement logic for saving the form data (backend integration).
    } else {
        alert('Please login before submitting the form.');
    }
});
