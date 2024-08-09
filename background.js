// Constants Defining the Break Name, Interval and Idle Threshold
const BREAK_ALARM_NAME = "BREAK_ALARM_NAME"
const BREAK_INTERVAL_MINUTES = 20

// Flag to Check if the Alarm is Currently Active
let isAlarmActive = false

// Event Listener that Triggers When the User's Idle State Changes
chrome.idle.onStateChanged.addListener((newState) => {
    // Start Timer Alarm if User is Active and Alarm is not Already Active
    if (newState === 'active' && !isAlarmActive) {
        console.log("User is active. Starting the break reminder timer.")
        createAlarm()
        // Stop Timer if User is Idle and the Alarm is Active
    } else if (newState !== "active" && isAlarmActive) {
        console.log("User is idle or away. Stop the break reminder timer.")
        stopAlarm()
    }
})   

// When the Extension is Installed or the Browser is Opened
chrome.runtime.onInstalled.addListener(() => {
    console.log("Break Reminder Extended Installed!")
    createAlarm()
})

// Event Listener that Triggers When an Alarm Goes Off
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === BREAK_ALARM_NAME) {
        showNotification()
        createAlarm()      // Set the next break alarm 
    }
})

function createAlarm() {
    chrome.alarms.create(BREAK_ALARM_NAME, { delayInMinutes: BREAK_INTERVAL_MINUTES })
    isAlarmActive = true
    console.log(`Break alarm set for ${BREAK_INTERVAL_MINUTES} minutes!`)
}

// Stop and Clear Alarm
function stopAlarm() {
    chrome.alarms.clear(BREAK_ALARM_NAME)
    isAlarmActive = false
    console.log("Break alarm is stopped.")
}

function showNotification() {
    chrome.notifications.create({
        title: "Take a Break Bro!",
        message: "You've been working for 45 minutes. Time to take  a break.",
        iconUrl: chrome.runtime.getURL("images/alarm-48.png"),
        type: "basic"
    })
}