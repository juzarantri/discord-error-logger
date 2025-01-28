import axios from "axios";
import fs from "fs";

export const sendErrorToDiscord = async (error, user) => {
    // Extract method name from the stack trace
    const stackLines = error.stack.split("\n");
    const methodName = stackLines.length > 1 ? stackLines[1].trim() : "Unknown Method";

    // Get version from package.json (if available)
    let appVersion = "unknown";
    try {
        const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
        appVersion = packageJson.version || "unknown";
    } catch (e) {
        console.error("Could not read package.json", e);
    }

    // Prepare the error payload
    const payload = {
        username: "ErrorBot",
        embeds: [
            {
                title: "🚨 Error Alert!",
                color: 16711680, // Red color
                fields: [
                    {
                        name: "👤 User",
                        value: `ID: ${user?.id}\nUsername: ${user?.email}`,
                        inline: true
                    },
                    {
                        name: "🛠️ Method",
                        value: `\`${methodName}\``,
                        inline: true
                    },
                    {
                        name: "📄 Error Message",
                        value: `\`${error?.message}\``
                    },
                    {
                        name: "❗ Developer Error",
                        value: `\`${error?.developerError || "N/A"}\``
                    },
                    {
                        name: "📝 Stack Trace",
                        value: `\`\`\`${error.stack.slice(0, 1000)}\`\`\`` // Limit message length
                    },
                    {
                        name: "📅 Timestamp",
                        value: `<t:${Math.floor(Date.now() / 1000)}:F>`,
                        inline: true
                    },
                    {
                        name: "🌎 Environment",
                        value: `\`${process.env.NODE_ENV || "unknown"}\``,
                        inline: true
                    },
                    {
                        name: "🔢 Version",
                        value: `\`${appVersion}\``,
                        inline: true
                    }
                ],
                footer: {
                    text: "Error Monitoring System",
                    icon_url: "https://cdn-icons-png.flaticon.com/512/4467/4467510.png"
                }
            }
        ]
    };

    // Send the webhook
    try {
        await axios.post(process.env.DISCORD_WEBHOOK_URL, payload);
        console.log("Error sent to Discord successfully.");
    } catch (webhookError) {
        console.error("Failed to send error to Discord:", webhookError);
    }
};
