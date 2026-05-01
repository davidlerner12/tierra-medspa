import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/call-track
 *
 * Server-side proxy that forwards call-tracking payloads to the Zapier
 * webhook. The actual webhook URL is read from the ZAPIER_WEBHOOK_URL
 * environment variable and is never exposed to the client.
 */
export async function POST(request: NextRequest) {
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('[call-track] ZAPIER_WEBHOOK_URL is not configured');
    return NextResponse.json(
      { error: 'Webhook not configured' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    // Forward the payload to Zapier
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error('[call-track] Zapier responded with', response.status);
      return NextResponse.json(
        { error: 'Webhook delivery failed' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[call-track] Error forwarding to webhook:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
