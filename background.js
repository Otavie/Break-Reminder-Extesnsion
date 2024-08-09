const BREAK_ALARM_NAME = "BREAK_ALARM_NAME"
const BREAK_INTERVAL_MINUTES = 1

// When the Extension is Installed or the Browser is Opened
chrome.runtime.onInstalled.addListener(() => {
    console.log("Break Reminder Extended Installed!")
    createBreakAlarm()
})

chrome.runtime.onStartup.addListener(() => {
    console.log("Chrome started, creating break alarm.")
    createBreakAlarm()
})

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === BREAK_ALARM_NAME) {
        showBreakNotification()
        createBreakAlarm()      // Set the next break alarm 
    }
})

function createBreakAlarm() {
    chrome.alarms.create(BREAK_ALARM_NAME, { delayInMinutes: BREAK_INTERVAL_MINUTES })
    console.log(`Break alarm set for ${BREAK_INTERVAL_MINUTES} minutes!`)
}

function showBreakNotification() {
    chrome.notifications.create({
        title: "Take a Break Bro!",
        message: "You've been working for 45 minutes. Time to take  a break.",
        iconUrl: chrome.runtime.getURL("images/alarm-48.png"),
        type: "basic"
    })
}