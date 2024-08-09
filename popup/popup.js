const saveBTN = document.querySelector(".save-btn");
const durationInput = document.getElementById("duration-input")

const saveAndStart = () => {
    const duration = parseInt(durationInput.value, 10)
    console.log("Save BTN clicked")
    // Save Duration in Chrome Storage
    chrome.storage.local.set({ breakInterval: duration }, () => {
        console.log(`Break interval set to ${duration} minutes.`)
        chrome.runtime.sendMessage({ event: 'startBreakTimer' })
    })
}

saveBTN.onclick = saveAndStart