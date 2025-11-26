export default function Footer() {
  return (
    <footer className="text-[var(--text-3)] py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-[var(--text-1)] mb-4">FOSSIT</p>
              <p className="text-sm">
              Gamifying open source development, one contribution at a time.
            </p>
          </div>

          {(() => {
            const footerCols = [
              {
                title: 'Platform',
                links: ['Home', 'About FOSSIT', 'Go To The App', 'Communities'],
              },
              {
                title: 'Resources',
                links: ['Learning Centre', 'For Developers', 'For Sponsors', 'For Educational Institutions'],
              },
              {
                title: 'Contact',
                links: ['Contact', 'Feedback'],
              },
            ];

            return footerCols.map((col) => (
              <div key={col.title}>
                <h5 className="uppercase text-[var(--text-1)] mb-4 font-semibold">{col.title}</h5>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="underline hover:text-white transition-colors uppercase text-sm">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ));
          })()}
        </div>
{/* 
        <div className="border-t border-[var(--border)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--text-1)] text-center md:text-left">
              FOSSIT
            </p>
              <div className="text-center uppercase">
              <p className="mb-0">
                Designed and Developed by <span className="underline">FOSSIT</span>
              </p>
              <p>
                With <span className="underline">JavaScript</span> and ❤️
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
