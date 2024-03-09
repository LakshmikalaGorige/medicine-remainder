// Function to display current time
function displayTime() {
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    var day = now.toLocaleDateString('en-US', { weekday: 'long' });
  
    document.getElementById('clock').innerHTML = `Today is ${date}, ${day}<br>Current time is ${time}`;
  }
  
  // Function to add a reminder to the list
  function addReminderToList(name, type, time) {
    var reminderList = document.getElementById("reminderList");
    var reminderItem = document.createElement("div");
    reminderItem.classList.add("reminder-item");
    reminderItem.innerHTML = `
      <p><strong>Medicine Name:</strong> ${name}</p>
      <p><strong>Medicine Type:</strong> ${type}</p>
      <p><strong>Reminder Time:</strong> ${time}</p>
      <button class="delete-btn">Delete</button>
    `;
    reminderList.appendChild(reminderItem);
    
    // Attach delete event handler
    reminderItem.querySelector(".delete-btn").addEventListener("click", function() {
      reminderList.removeChild(reminderItem);
    });
  }
  
  // Function to set an alarm
  function setAlarm(time, name) {
    var currentTime = new Date();
    var reminderTime = new Date(currentTime.toDateString() + ' ' + time);
  
    var timeDifference = reminderTime.getTime() - currentTime.getTime();
  
    if (timeDifference > 0) {
      setTimeout(function() {
        playAlarm();
      }, timeDifference);
    }
  }
  
  // Function to play alarm sound
  function playAlarm() {
    var audio = document.getElementById('alarmAudio');
    audio.play();
  }
  
  
  
  // Event listener for form submission
  document.getElementById("medicineForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("medicineName").value;
    var type = document.getElementById("medicineType").value;
    var time = document.getElementById("reminderTime").value;
  
    // Add reminder to list
    addReminderToList(name, type, time);
  
    // Set alarm
    setAlarm(time, name);
  });
  
  // Display current time
  displayTime();
  // Refresh time every second
  setInterval(displayTime, 1000);
  