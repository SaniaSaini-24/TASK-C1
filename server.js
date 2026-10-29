
import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Check configuration before starting the server
const apiKey = process.env.SENDGRID_API_KEY;
const senderEmail = process.env.SENDER_EMAIL;

if (!apiKey || !senderEmail) {
  console.error(
    "Missing SENDGRID_API_KEY or SENDER_EMAIL in your .env file."
  );
  process.exit(1);
}

sgMail.setApiKey(apiKey);

// Subscribe endpoint
app.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body || {};

    // Check that email is provided as a string
    if (typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        message: "Please enter an email address.",
      });
    }

    const normalizedEmail = email.trim();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(normalizedEmail)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    console.log("Processing subscription for:", normalizedEmail);

    const message = {
      to: normalizedEmail,
      from: senderEmail,
      subject: "Welcome to Daily Insider!",
      text: "Thank you for subscribing. Welcome!",
      html: `
        <h2>Welcome to Daily Insider!</h2>
        <p>Thank you for subscribing.</p>
        <p>You will now receive our latest updates.</p>
      `,
    };

    // Send email using SendGrid
    const [response] = await sgMail.send(message);

    console.log(
      "SendGrid Status Code:",
      response.statusCode
    );

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(
        `Unexpected SendGrid status: ${response.statusCode}`
      );
    }

    return res.status(200).json({
      message: "Subscription successful! Please check your email.",
    });
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response?.body || error.message || error
    );

    return res.status(500).json({
      message: "Unable to send welcome email. Please try again.",
    });
  }
});

// Handle invalid JSON request bodies
app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      message: "Invalid JSON request body.",
    });
  }

  return next(error);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
