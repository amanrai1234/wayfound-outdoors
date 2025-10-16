import { NextResponse } from 'next/server';

export async function GET() {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!calendarId || !apiKey) {
    return NextResponse.json(
      { error: 'Missing GOOGLE_CALENDAR_ID or GOOGLE_API_KEY' },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    key: apiKey,
    timeMin: new Date().toISOString(),
    singleEvents: 'true',
    orderBy: 'startTime',
    maxResults: '25'
  });

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params}`;

  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: 'Failed to fetch events', details: text }, { status: 502 });
    }
    const data = await res.json();

    const events = (data.items || []).map(e => {
      const start = e.start?.dateTime || e.start?.date || null;
      const end = e.end?.dateTime || e.end?.date || null;
      return {
        id: e.id,
        summary: e.summary || 'Untitled',
        description: e.description || '',
        location: e.location || '',
        start,
        end,
        htmlLink: e.htmlLink || ''
      };
    });

    return NextResponse.json({ events });
  } catch (err) {
    return NextResponse.json({ error: 'Unexpected error', details: String(err) }, { status: 500 });
  }
}


