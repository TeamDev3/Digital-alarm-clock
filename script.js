const clock = document.getElementById("clock");
const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarm");
const clearAlarmBtn = document.getElementById("clearAlarm");

let alarmTime = null;
let alarmTimeout = null;

// Update clock every second
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;

  // Check alarm
  if (alarmTime === `${hours}:${minutes}`) {
    alert("⏰ Alarm Ringing!");
    alarmTime = null;
  }
}

setInterval(updateClock, 1000);

// Set alarm
setAlarmBtn.addEventListener("click", () => {
  if (alarmTimeInput.value) {
    alarmTime = alarmTimeInput.value;
    alert(`✅ Alarm set for ${alarmTime}`);
  }
});

// Clear alarm
clearAlarmBtn.addEventListener("click", () => {
  alarmTime = null;
  alert("❌ Alarm cleared");
});
