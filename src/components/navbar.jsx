function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          DEV@Deakin
        </h1>

        <div className="flex items-center gap-6">
          <a
            href="#articles"
            className="hover:text-blue-200 transition"
          >
            Articles
          </a>

          <a
            href="#tutorials"
            className="hover:text-blue-200 transition"
          >
            Tutorials
          </a>

          <a
            href="#newsletter"
            className="hover:text-blue-200 transition"
          >
            Subscribe
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar