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
            const footerCols: {title: string, links: {name: string, url: string}[]}[] = [
              {
                title: 'Platform',
                links: [
                  {name: 'Home', url: '/'}, 
                  {name: 'About FOSSIT', url: '/about'}, 
                  {name: 'Go To The App', url: 'https://app.fossit.co.in'}, 
                  {name: 'Communities', url: '/communities'}
                ],
              },
              {
                title: 'Resources',
                links: [
                  {name: 'Learning Centre', url: '/learning-centre'}, 
                  {name: 'For Developers', url: '/for-developers'}, 
                  {name: 'For Sponsors', url: '/for-sponsors'}, 
                  {name: 'For Educational Institutions', url: '/for-educational-institutions'}
                ],
              },
              {
                title: 'Contact',
                links: [
                  {name: 'Contact', url: '/contact'}, 
                  {name: 'Feedback', url: '/feedback'}
                ],
              },
            ];

            return footerCols.map((col) => (
              <div key={col.title}>
                <h5 className="uppercase text-[var(--text-1)] mb-4 font-semibold">{col.title}</h5>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.url} className="underline hover:text-white transition-colors uppercase text-sm">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ));
          })()}
        </div>

        <div className="border-t border-[var(--border)] pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--text-1)] text-center md:text-left">
              FOSSIT
            </p>
              <div className="text-center uppercase">
              <p className="mb-0">
                Designed and Developed by and for <span className="underline">India</span><img src="https://em-content.zobj.net/source/twitter/408/flag-india_1f1ee-1f1f3.png" alt="Indian Flag" className="inline-block ml-2 w-[1.75rem]" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
