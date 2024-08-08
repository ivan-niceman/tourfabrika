import { useEffect, useRef } from 'react';

export default function Insurances() {
  <div><script
        data-che-options='{"partnerId":"10745","isIgnoreForm":"false","isIgnoreUpsell":"false"}'
        data-che-colors='{"primary":"#0383cb"}'
        src="https://static.cherehapa.ru/widgets/loader.min.js"></script></div>

  const widgetInsurancesRef = useRef(null);

  useEffect(() => {
    const cherehapaContainer = widgetInsurancesRef.current;

    if (!cherehapaContainer) return;
    if (!cherehapaContainer.querySelector('script[src="https://static.cherehapa.ru/widgets/loader.min.js"]')) {
      const script = document.createElement('script');
      script.src = "https://static.cherehapa.ru/widgets/loader.min.js";
      script.setAttribute('data-che-options', '{"partnerId":"10745"}', '{"isIgnoreForm":"false"}', '{"isIgnoreUpsell":"false"}');
      script.setAttribute('data-che-colors', '{"primary":"#0383cb"}');
      cherehapaContainer.appendChild(script);
    }
  }, []);

  return (
    <section className="insurances" id='insurances'>
      <div className='container'>
        <h2 className="insurances__title">страховки</h2>
        <div ref={widgetInsurancesRef}></div>
      </div>
    </section>
  )
}
