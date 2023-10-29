import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { LINE_USER_ID, LINE_CHANNEL_ACCESS_TOKEN } = process.env;
  const requestBody: ContactApiRequestBody = await req.json();
  console.log(requestBody.email);
  fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      to: LINE_USER_ID,
      messages: [{ type: 'text', text: requestBody }],
    }),
  })
    .then((response) => {
      if (!response.ok) {
        console.error('サーバーエラー');
        return NextResponse.json({ message: 'Failed to send Line' }, { status: 400 });
      }
      // ここに成功時の処理を記述
      console.log('Success:', response.json());
      return NextResponse.json({ status: 201 });
    })
    .catch((error) => {
      console.log('!!!!failed!!!!');
      console.error('Error:', error);
      return NextResponse.json({ message: 'Failed to send Line' }, { status: 500 });
    });
}
