function Footer() {
  return (
    <footer className="bg-[#009688] text-black">

      <div className="max-w-6xl mx-auto px-6 pt-7 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Explore */}
          <div>
            <h2 className="text-[21px] font-bold mb-3">
              Explore
            </h2>

            <div className="space-y-1 text-[17px]">
              <a
                href="#about"
                className="block hover:underline"
              >
                Home
              </a>

              <a
                href="#questions"
                className="block hover:underline"
              >
                Questions
              </a>

              <a
                href="#articles"
                className="block hover:underline"
              >
                Articles
              </a>

              <a
                href="#tutorials"
                className="block hover:underline"
              >
                Tutorials
              </a>
            </div>
          </div>


          {/* Support */}
          <div>
            <h2 className="text-[21px] font-bold mb-3">
              Support
            </h2>

            <div className="space-y-1 text-[17px]">
              <a
                href="#faqs"
                className="block hover:underline"
              >
                FAQs
              </a>

              <a
                href="#help"
                className="block hover:underline"
              >
                Help
              </a>

              <a
                href="#contact"
                className="block hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>


          {/* Stay connected */}
          <div>
            <h2 className="text-[21px] font-bold mb-3">
              Stay connected
            </h2>

            <div className="flex gap-2">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-[#455a64] rounded flex items-center justify-center text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" />
                </svg>
              </a>


              {/* X */}
              <a
                href="#"
                aria-label="X"
                className="w-10 h-10 bg-[#455a64] rounded flex items-center justify-center text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.6l-5.17-6.76L5.06 22H1.8l7.6-8.69L1.25 2H8l4.67 6.17L18.244 2zm-1.15 17.8h1.8L7.02 4.08H5.09L17.094 19.8z" />
                </svg>
              </a>


              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#455a64] rounded flex items-center justify-center text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

            </div>
          </div>

        </div>


        {/* Bottom section */}
        <div className="text-center mt-8">

          <h2 className="text-[21px] font-bold">
            DEV@Deakin 2026
          </h2>

          <div className="flex justify-center gap-10 mt-4 text-[16px]">

            <a
              href="#"
              className="hover:underline"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:underline"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:underline"
            >
              Code of Conduct
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer