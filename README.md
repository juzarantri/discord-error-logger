````md
# Discord Error Logger 📢

[![npm version](https://img.shields.io/npm/v/error-logger.svg)](https://www.npmjs.com/package/discord-error-logger)

[![License](https://img.shields.io/npm/l/error-logger.svg)](https://github.com/juzarantri/discord-error-logger/blob/main/LICENSE)

A simple utility to send error logs to a **Discord** channel via a webhook. This is useful for monitoring errors in production environments by sending detailed error information, including stack traces, user details, and environment information.

## 📦 Installation

You can easily install the `discord-error-logger` package via **npm**:

```sh
npm install discord-error-logger
```
````

Or with **yarn**:

```sh
yarn add discord-error-logger
```

## 🚀 Usage

Once installed, you can import and use the `sendErrorToDiscord` function to send errors to your Discord channel.

### Example Usage:

```javascript
import { sendErrorToDiscord } from "discord-error-logger";

// Create a mock error
const error = new Error("Something went wrong!");
const user = { id: "123", email: "user@example.com" };

// Send the error details to Discord
sendErrorToDiscord(error, user);
```

The above code will send the following details to your Discord webhook:

- **User ID** and **Email**.
- **Method Name** from the stack trace.
- **Error Message**.
- **Stack Trace** (Limited to 1000 characters).
- **App Version** from `package.json`.
- **Environment** (e.g., development, production).

## 🌟 Features

- Sends error logs to a **Discord channel** using a webhook.
- Includes **user information**, **method name**, **error message**, and **stack trace**.
- Retrieves **application version** from `package.json`.
- Supports **custom error messages**.
- Flexible for different environments (e.g., development, staging, production).

## 🔧 Environment Variables

Before using the package, you need to set up your **Discord Webhook URL**. You can configure this in your environment variables:

```sh
DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/your-webhook-url"
```

### Example `.env` file:

```
DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/your-webhook-url"
```

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/juzarantri/discord-error-logger/blob/main/LICENSE) file for details.

## 📚 Additional Information

- **Version:** The application version will automatically be retrieved from your `package.json` file and included in the error logs.
- **Environment:** The current Node.js environment (e.g., `development`, `production`) will also be included.

---

## 🔄 Updates and Contributions

If you'd like to contribute to this project, feel free to submit a pull request! Here's how you can contribute:

- Fork the repository
- Make your changes
- Submit a pull request for review

---

### 💬 Support

If you encounter any issues or have any questions, feel free to open an issue in the [GitHub repository](https://github.com/juzarantri/discord-error-logger/issues).

---

### 🎉 Thank you for using **Error Logger**! 🚀
