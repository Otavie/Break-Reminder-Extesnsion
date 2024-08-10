const saveBTN = document.querySelector(".save-btn");
const stopBTN = document.querySelector(".stop-btn");
const errorMessage = document.querySelector(".errorMessage");
const durationInput = document.getElementById("duration-input")

const saveAndStart = () => {
    const duration = parseFloat(durationInput.value)

    if (isNaN(duration) || duration < 1) {
        errorMessage.style.display = "flex"
        return;
    } else {
        errorMessage.style.display = "none"
    }

    // Save Duration in Chrome Storage
    chrome.storage.local.set({ breakInterval: duration }, () => {
        console.log(`Break interval set to ${duration} minutes.`)
        chrome.runtime.sendMessage({ event: "startBreakTimer" })
    })
}

const stopReminder = () => {
    chrome.runtime.sendMessage({ event: "stopBreakTimer" })
}

saveBTN.onclick = saveAndStart
stopBTN.onclick = stopReminder