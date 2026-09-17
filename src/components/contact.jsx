function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-12"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Contact
        </h2>

        <p className="text-gray-600 mb-3">
          Email:{" "}
          <a
            href="mailto:sania9115.ai25@chitkara.edu.in"
            className="text-blue-700 hover:underline"
          >
            sania9115.ai25@chitkara.edu.in
          </a>
        </p>

        <p className="text-gray-600">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sania-saini-03b905393"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 hover:underline"
          >
            LinkedIn Profile
          </a>
        </p>

      </div>
    </section>
  )
}

export default Contact