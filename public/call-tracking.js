/**
 * Call Tracking Script — Tierra Med Spa
 * 
 * Intercepts all tel: link clicks site-wide, sends a POST to the Zapier
 * webhook with tracking data (fbclid, phone, url, timestamp), then allows
 * the actual phone call to proceed.
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

  var WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/27092509/u7bnpti/';

  /**
   * Extract a query-param value from a URL string.
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
   * Send the payload to the webhook.
   * Uses navigator.sendBeacon (most reliable for page-unload scenarios)
   * with a fetch + keepalive fallback.
   */
  function sendWebhook(payload) {
    var json = JSON.stringify(payload);

    // Primary: sendBeacon — fire-and-forget, survives navigation/unload
    if (navigator.sendBeacon) {
      var blob = new Blob([json], { type: 'application/json' });
      var queued = navigator.sendBeacon(WEBHOOK_URL, blob);
      if (queued) return; // successfully queued
    }

    // Fallback: fetch with keepalive
    try {
      fetch(WEBHOOK_URL, {
        method: 'POST',
        body: json,
        mode: 'no-cors',
        credentials: 'omit',
        keepalive: true
      }).catch(function () {
        // silently ignore — call must still go through
      });
    } catch (_) {
      // final fallback: XHR (synchronous as last resort is intentionally avoided
      // to not block the UI; the call taking priority is more important)
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

    // Fire the webhook (non-blocking)
    sendWebhook(payload);

    // Allow the default tel: behavior to proceed — no preventDefault
  }

  // Attach via event delegation on the capture phase so we fire
  // even if other handlers call stopPropagation in the bubble phase.
  document.addEventListener('click', handleClick, true);
})();
