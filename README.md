# Break Reminder Chrome Extension ⏰

## Overview

**Break Reminder** is a simple and effective Chrome extension designed to help you stay healthy and productive by reminding you to take regular breaks while working. By setting customizable intervals, this extension will notify you when it's time to step away from your computer, ensuring you maintain a balanced workflow and reduce the risk of burnout.

## Features

- **Customizable Break Intervals**: Set your preferred break interval duration (in minutes).
- **Start and Stop Break Reminders**: Easily start or stop the reminder at any time.
- **Idle Detection**: Automatically pauses the reminder if you're idle, resuming when you return.
- **Desktop Notifications**: Receive notifications when it's time to take a break.
- **Persistent Settings**: Your break interval settings are saved even when you close the browser.

## Installation

1. **Clone or download the repository** to your local machine:
   ```bash
   git clone https://github.com/Otavie/Break-Reminder-Extesnsion.git
   ```
2. **Open the Chrome browser** and go to the Extensions page:

   - Navigate to `chrome://extensions/` in the address bar.
   - Enable **Developer Mode** by toggling the switch in the top-right corner.

3. **Load the extension**:

   - Click on **Load unpacked** and select the folder where you cloned/downloaded the extension.

4. **You're all set!** The Break Reminder extension is now active and ready to help you stay productive.

## How to Use

1. **Set Your Break Interval**:

   - Click on the extension icon in the Chrome toolbar.
   - Input the desired break interval (in minutes).
   - Click **Save & Start** to start the timer.

2. **Stop Break Reminders**:

   - Click the **Stop Reminder** button to disable the break notifications temporarily.

3. **Customize Settings**:
   - Open the extension popup and set the break interval according to your needs.

## Screenshots

![Popup Interface](https://github.com/Otavie/github_images/blob/main/break-reminder-extension-input.png)

## Development

### File Structure

- `manifest.json`: The configuration file for the Chrome extension.
- `popup.html`: The HTML file for the extension’s popup interface.
- `popup.js`: Handles user interactions in the popup (e.g., saving the break interval).
- `background.js`: Runs in the background to manage alarms and notifications.

### Prerequisites

- Chrome browser (latest version)
- Basic understanding of JavaScript, HTML, and Chrome extensions

### Customization

- Modify `popup.html` and `popup.js` to add additional user interface elements or features.
- Enhance `background.js` with more complex logic, such as varying break intervals based on the time of day.

### Contributions

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes or improvements you'd like to make.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

This project was inspired by the need for healthier work habits and the desire to encourage regular breaks during long work sessions.

---

Feel free to customize this README to match your specific requirements or branding.
