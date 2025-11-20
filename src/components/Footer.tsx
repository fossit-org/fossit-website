export default function Footer() {
  return (
    <footer className="bg-[var(--bg-3)] text-[var(--text-3)] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-[var(--text-1)] mb-4">FOSSIT</h3>
              <p className="text-sm">
              Gamifying open source development, one contribution at a time.
            </p>
          </div>

          <div>
            <h4 className="uppercase text-[var(--text-1)] mb-4">Platform</h4>
              <ul className="space-y-2">
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Home</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">About FOSSIT</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Go To The App</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Communities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-[var(--text-1)] mb-4">Resources</h4>
              <ul className="space-y-2">
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Learning Centre</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">For Developers</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">For Sponsors</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">For Educational Institutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase text-[var(--text-1)] mb-4">Contact</h4>
              <ul className="space-y-2">
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Contact</a></li>
              <li><a href="#" className="underline hover:text-white transition-colors uppercase">Feedback</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--text-1)] text-center md:text-left">
              FOSSIT
            </p>
              <div className="text-center uppercase">
              <p className="mb-0">
                Designed and Developed by <span className="underline">Manish</span> and <span className="underline">FOSSIT</span>
              </p>
              <p>
                WiTh <span className="underline">JavaScript</span> and ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
