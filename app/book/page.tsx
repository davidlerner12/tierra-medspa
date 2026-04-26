'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BookPage() {
  const router = useRouter();

  useEffect(() => {
    // 1. Define the Cal script loader
    (function (C: any, A: any, L: any) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || [];
          let script = d.createElement("script");
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1]; api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;

    // 2. Initialize the specific calendar
    Cal("init", "led-facelift", { origin: "https://tierra-beauty.cal.com" });

    // 3. Attach it to the div we render
    Cal.ns["led-facelift"]("inline", {
      elementOrSelector: "#my-cal-inline-led-facelift",
      config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true" },
      calLink: "david/led-facelift",
    });

    Cal.ns["led-facelift"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });

    // 4. Listen for success
    Cal.ns["led-facelift"]("on", {
      action: "bookingSuccessful",
      callback: function () {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Schedule');
        }
        router.push('/thankyou');
      }
    });

  }, [router]);

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', backgroundColor: '#fff' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <h1 className="heading-style-h2 text-center" style={{ marginBottom: '2rem' }}>Book Your Appointment</h1>
        
        {/* Cal inline embed container */}
        <div style={{ width: '100%', height: '700px', overflow: 'scroll' }} id="my-cal-inline-led-facelift"></div>
      </div>
    </div>
  );
}
