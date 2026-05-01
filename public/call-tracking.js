/**
 * Call Tracking Script — Tierra Med Spa
 * 
 * Intercepts all tel: link clicks site-wide, sends a POST to the
 * server-side proxy at /api/call-track (which forwards to the actual
 * webhook), then allows the phone call to proceed.
 *
 * The webhook URL is NOT in this file — it lives in a server-side
 * environment variable, keeping it safe from public exposure.
 *
 * Features:
 *  - Event delegation on document (works for dynamically-rendered buttons)
 *  - navigator.sendBeacon for reliability (survives page unload / tel: navigation)
 *  - fetch() fallback with keepalive for browsers that don't support sendBeacon Blob
 *  - Extracts fbclid from current URL query params
 *  - Works on desktop and mobile
 *  - Supports multiple call buttons without any component changes
 */

(function () {
  'use strict';

  // Points to our own Next.js API route — no secrets exposed
  var TRACKING_ENDPOINT = '/api/call-track';

  /**
   * Extract a query-param value from the current URL.
   */
  function getQueryParam(name) {
    try {
      var params = new URLSearchParams(window.location.search);
      return params.get(name) || '';
    } catch (_) {
      return '';
    }
  }

  /**
   * Parse the phone number from a tel: href.
   * e.g. "tel:+18888341049" → "+18888341049"
   */
  function parsePhone(href) {
    if (!href) return '';
    return href.replace(/^tel:/i, '').trim();
  }

  /**
   * Build the tracking payload.
   */
  function buildPayload(phone) {
    return {
      fbclid: getQueryParam('fbclid'),
      phone: phone,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Send the payload to the server-side proxy.
   * Uses navigator.sendBeacon (most reliable for page-unload scenarios)
   * with a fetch + keepalive fallback.
   */
  function sendTracking(payload) {
    var json = JSON.stringify(payload);

    // Primary: sendBeacon — fire-and-forget, survives navigation/unload
    if (navigator.sendBeacon) {
      var blob = new Blob([json], { type: 'application/json' });
      var queued = navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      if (queued) return; // successfully queued
    }

    // Fallback: fetch with keepalive
    try {
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json,
        keepalive: true
      }).catch(function () {
        // silently ignore — call must still go through
      });
    } catch (_) {
      // final safety net — the phone call always takes priority
    }
  }

  /**
   * Find the closest ancestor <a> with an href starting with "tel:".
   */
  function findTelAnchor(target) {
    var el = target;
    while (el && el !== document) {
      if (
        el.tagName === 'A' &&
        el.href &&
        el.href.toLowerCase().indexOf('tel:') === 0
      ) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }

  /**
   * Main click handler — delegated on the document.
   */
  function handleClick(event) {
    var anchor = findTelAnchor(event.target);
    if (!anchor) return; // not a tel: link click

    var phone = parsePhone(anchor.href);
    var payload = buildPayload(phone);

    // Fire the tracking request (non-blocking)
    sendTracking(payload);

    // Allow the default tel: behavior to proceed — no preventDefault
  }

  // Attach via event delegation on the capture phase so we fire
  // even if other handlers call stopPropagation in the bubble phase.
  document.addEventListener('click', handleClick, true);
})();
