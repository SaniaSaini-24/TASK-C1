function TutorialCard({ title, description, image }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        <button
          type="button"
          className="mt-5 px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          View Tutorial
        </button>

      </div>

    </article>
  )
}

export default TutorialCard