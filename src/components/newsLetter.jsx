import { useState } from "react"

function Newsletter() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      setMessage(data.message)

      if (response.ok) {
        setEmail("")
      }
    } catch (error) {
      console.error("Error:", error)
      setMessage("Unable to connect to the server.")
    }
  }

  return (
    <section id="newsletter" className="bg-gray-200 px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-3">
          Sign Up For Our Daily Insider
        </h2>

        <p className="text-gray-600 mb-6">
          Subscribe to receive updates and welcome emails directly in your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p className="mt-4 text-gray-700">
            {message}
          </p>
        )}

      </div>
    </section>
  )
}

export default Newsletter