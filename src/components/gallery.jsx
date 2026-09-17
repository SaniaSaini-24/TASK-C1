function Gallery() {
  return (
    <section id="gallery" className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        <img
          src="/img/my_parents.jpeg"
          alt="Family photo"
          className="w-80 h-64 object-cover rounded-xl shadow-md"
        />

        <img
          src="/img/cousins.jpeg"
          alt="Cousin photo"
          className="w-80 h-64 object-cover rounded-xl shadow-md"
        />

        <img
          src="/img/parents.jpeg"
          alt="Parents photo"
          className="w-80 h-64 object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  )
}

export default Gallery