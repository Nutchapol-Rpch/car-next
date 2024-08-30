export async function GET(request) {
  const amount = parseFloat(request.nextUrl.searchParams.get("amount"));
  const rate = parseFloat(process.env.VAT_RATE);
  const vat = Math.round(amount * rate * 100) / 100;

  return new Response(
    JSON.stringify({
      rate,
      amount,
      vat,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function POST(request) {
  // Parse the JSON body of the request
  const data = await request.json();

  // Extract the amount from the request body
  const amount = parseFloat(data.amount);

  // Get the VAT rate from the environment variable
  const rate = parseFloat(process.env.VAT_RATE);

  // Calculate the VAT (rounded to two decimal places)
  const vat = Math.round(amount * rate * 100) / 100;

  // Return the response in JSON format
  return new Response(
    JSON.stringify({
      rate,
      amount,
      vat,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
