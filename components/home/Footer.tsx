export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 px-8 py-10 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
        {/* Logo & Info */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-1 mb-3">
            <div className="mr-4 flex-shrink-0">
        <img src="/image/logo.png" alt="SPEED" className="h-8 w-auto" />
      </div>
          </div>
          <p className="text-gray-500 text-xs mb-2">info@howspeedo.in</p>
          <p className="text-gray-500 text-xs">+91 123 456 7891</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Blog", "Pricing Plan", "OTT", "FAQ"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Movies To Watch */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Movies To Watch</h4>
          <ul className="space-y-2">
            {["Top Trending", "Recommend", "Pricing Plan", "Popular"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Movies To Watch 2 */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Movies To Watch</h4>
          <ul className="space-y-2">
            {["Top Trending", "Recommend", "Popular"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">About Company</h4>
          <ul className="space-y-2">
            {["Contact Us", "Privacy Policy", "Terms & Conditions"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-gray-500 text-xs mb-2">Download the app</p>
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 bg-[#E50914] text-white text-xs px-3 py-1.5 rounded-md w-fit">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.39.07 2.37.75 3.18.75.78 0 2.27-.96 3.83-.82 2.71.23 4.14 2.24 4.14 2.24s-2.29 1.4-2.06 4.46c.23 3.25 2.85 4.25 2.91 4.25zm-3.21-17.3c-.95 1.09-2.5 1.97-3.76 1.87-.14-1.25.5-2.56 1.34-3.46.95-1.09 2.5-1.97 3.76-1.87.14 1.25-.5 2.56-1.34 3.46z" />
                </svg>
                App Store
              </button>
              <button className="flex items-center gap-2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md w-fit">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.133a1 1 0 010 1.852l-2.302 2.302-2.302-2.302 2.302-2.302 2.302 2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-xs">© 2025 SpeedO Prime. All Rights Reserved.</p>
        <div className="flex gap-4">
          {["Terms Of use", "Privacy", "FAQ"].map((item) => (
            <a key={item} href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}