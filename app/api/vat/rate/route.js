export async function GET() {
  // Get the VAT rate from the environment variable
  const rate = parseFloat(process.env.VAT_RATE);

  // Return the response in JSON format
  return new Response(
    JSON.stringify({
      rate,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
