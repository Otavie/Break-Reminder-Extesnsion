const saveBTN = document.querySelector(".save-btn");
const stopBTN = document.querySelector(".stop-btn");
const errorMessage = document.querySelector(".errorMessage");
const durationInput = document.getElementById("duration-input")
const startMessage = document.querySelector(".start-message");
const stopMessage = document.querySelector(".stop-message");

stopBTN.disabled = true

const displayMessage = (messageElt, otherMessageElt) => {
    if (otherMessageElt) {
        otherMessageElt.style.display = "none"
    }

    messageElt.style.display = "flex"

    setTimeout(() => {
        messageElt.style.display = "none"
    }, 5000)
}

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

        displayMessage(startMessage, stopMessage)
    })

    // saveBTN.disabled = true
    stopBTN.disabled = false
}

const stopReminder = () => {
    chrome.runtime.sendMessage({ event: "stopBreakTimer" })
    displayMessage(stopMessage, startMessage)
    saveBTN.disabled = false
    stopBTN.disabled = true
}

saveBTN.onclick = saveAndStart
stopBTN.onclick = stopReminder