const saveBTN = document.querySelector(".save-btn");
const stopBTN = document.querySelector(".stop-btn");
const errorMessage = document.querySelector(".errorMessage");
const durationInput = document.getElementById("duration-input")

const saveAndStart = () => {
    const duration = parseFloat(durationInput.value)

    if (isNaN(duration) || duration < 1) {
        errorMessage.style.display = "flex"
        console.log("Enter a valid number")
        return;
    } else {
        errorMessage.style.display = "none"
    }

    console.log("Save BTN clicked")
    // Save Duration in Chrome Storage
    chrome.storage.local.set({ breakInterval: duration }, () => {
        console.log(`Break interval set to ${duration} minutes.`)
        chrome.runtime.sendMessage({ event: "startBreakTimer" })
    })
}

const stopReminder = () => {
    chrome.alarms.clearAll()
    console.log("reminder stopped")
}

saveBTN.onclick = saveAndStart
stopBTN.onclick = stopReminder