'use client';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';

export default function ThankYouPage() {
  useEffect(() => {
    // Wait for Next.js to fully hydrate and the base pixel to initialize
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
        console.log('Sending fbq Schedule event...');
        (window as any).fbq('trackCustom', 'ScheduleAppointment');
      } else {
        console.warn('fbq not found on window');
      }
    }, 1000); // 1-second delay ensures the base pixel has fully loaded

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f9f9f9',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#e6f4ea',
          color: '#1e8e3e',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px auto',
          fontSize: '40px'
        }}>
          ✓
        </div>
        <h1 className="heading-style-h2" style={{ marginBottom: '16px' }}>Booking Confirmed!</h1>
        <p className="text-size-regular" style={{ marginBottom: '32px', color: '#666' }}>
          Thank you for booking your LED non-surgical facelift facial. We have sent a confirmation email with your appointment details. We look forward to seeing you!
        </p>
        <Link href="/" className="button button-green" style={{ display: 'inline-flex' }}>
          <div className="button_body">
            <span>Return to Homepage</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
