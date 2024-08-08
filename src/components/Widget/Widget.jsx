import { useEffect, useRef } from 'react';

export default function Widget() {
  const searchDivRef = useRef(null);

  useEffect(() => {
    const currentSearchDivRef = searchDivRef.current;
    const scriptSearch = document.createElement('script');
    scriptSearch.src = "//tourvisor.ru/module/init.js";
    scriptSearch.type = "text/javascript";

    if (currentSearchDivRef) {
      currentSearchDivRef.appendChild(scriptSearch);
    }
    return () => {
      if (currentSearchDivRef) {
        currentSearchDivRef.removeChild(scriptSearch);
      }
    };
  }, []);

  return (
    <section className="widget" id="widget">
      <div className="container">
        <div className="widget__search" ref={searchDivRef}>
        <div className="tv-search-form tv-moduleid-9966776"></div>
        </div>
      </div>
    </section>
  );
}
