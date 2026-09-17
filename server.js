import express from "express"
import dotenv from "dotenv"
import sgMail from "@sendgrid/mail"

dotenv.config()

const app = express()
const PORT = 3001

app.use(express.json())

app.post("/subscribe", async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({
      message: "Email is required.",
    })
  }

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
      to: email,
      from: process.env.SENDER_EMAIL,
      subject: "Welcome to DEV@Deakin",
      text: "Thank you for subscribing to DEV@Deakin!",
    }

    await sgMail.send(msg)

    res.status(200).json({
      message: "Subscription successful! Check your email.",
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Unable to send email.",
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})