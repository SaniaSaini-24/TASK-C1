
import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      let data = {};

      if (contentType.includes("application/json")) {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(
          data.message || `Request failed (${response.status}).`
        );
      }

      setMessage(data.message || "Subscription successful!");
      setIsSuccess(true);
      setEmail("");
    } catch (error) {
      console.error("Newsletter error:", error);
      setMessage(
        error.message === "Failed to fetch"
          ? "Unable to connect to the server. Please try again."
          : error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
            disabled={isSubmitting}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {message && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 ${
              isSuccess ? "text-green-700" : "text-red-700"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
