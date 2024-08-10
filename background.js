const BREAK_ALARM_NAME = "BREAK_ALARM_NAME"

// Flag to Check if the Alarm is Currently Active
let isAlarmActive = false

function createAlarm(interval = 2) {
    chrome.alarms.create(BREAK_ALARM_NAME, { delayInMinutes: interval })
    isAlarmActive = true
    console.log(`Break alarm set for ${interval} minutes!`)
}

// Stop and Clear Alarm
function stopAlarm() {
    chrome.alarms.clear(BREAK_ALARM_NAME)
    isAlarmActive = false
    console.log("Break alarm is stopped.")
}

// Event Listener that Triggers When the User's Idle State Changes
chrome.idle.onStateChanged.addListener((newState) => {
    console.log(`Idle state changed: ${newState}`)
    // Start Timer Alarm if User is Active and Alarm is not Already Active
    if (newState === "active" && !isAlarmActive) {
        console.log("User is active. Starting the break reminder timer.")
        chrome.storage.local.get("breakInterval", (result) => {
            const interval = result.breakInterval
            createAlarm(interval)
        })
        // Stop Timer if User is Idle and the Alarm is Active
    } else if (newState === "idle" && isAlarmActive) {
        console.log("User is idle or away. Break reminder timer is stopped!")
        stopAlarm()
    }
})   

// When the Extension is Installed or the Browser is Opened
chrome.runtime.onInstalled.addListener(() => {
    console.log("Break Reminder Extension Installed!")
    chrome.storage.local.get("breakInterval", (result) => {
        const interval = result.breakInterval
        createAlarm(interval)
    })
})

// Event Listener that Triggers When an Alarm Goes Off
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === BREAK_ALARM_NAME) {
        chrome.storage.local.get("breakInterval", (result) => {
            const interval = result.breakInterval
            showNotification(interval)
            createAlarm(interval)      // Set the next break alarm 
        })
    }
})

// Listen for Message from Popup.js
chrome.runtime.onMessage.addListener((request) => {
    if (request.event === "startBreakTimer") {
        chrome.storage.local.get("breakInterval", (result) => {
            createAlarm(result.breakInterval)
        })
    }
})

function showNotification(interval) {
    chrome.notifications.create({
        title: "Take a Break Bro!",
        message: `You've been working for ${interval} minutes. Time to take  a break.`,
        iconUrl: chrome.runtime.getURL("images/alarm-48.png"),
        type: "basic"
    })
}