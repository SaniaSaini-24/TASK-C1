import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3001;
// Configure SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static("public"));

// Subscribe endpoint
app.post("/subscribe", async (req, res) => {
    try {
        const { email } = req.body;

        // Check if email is empty
        if (!email) {
            return res.status(400).json({
                message: "Please enter an email address."
            });
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            return res.status(400).json({
                message: "Please enter a valid email address."
            });
        }

        console.log("New subscriber:", email);

        // Email message
        const message = {
            to: email,
            from: process.env.SENDER_EMAIL,
            subject: "Welcome to Daily Insider!",
            text: "Thank you for subscribing. Welcome!",
            html: `
                <h2>Welcome to Daily Insider! </h2>
                <p>Thank you for subscribing.</p>
                <p>You will now receive our latest updates.</p>
            `
        };

        // Send email using SendGrid
        const response = await sgMail.send(message);
        console.log("Welcome email sent successfully!");
        console.log("SendGrid Status Code:", response[0].statusCode);

        // Send success response
        res.status(200).json({
            message: "Subscription successful! Please check your email."
        });

    } catch (error) {
        console.error("Error sending email:", error.response?.body || error);

        res.status(500).json({
            message: "Unable to send welcome email. Please try again."
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});