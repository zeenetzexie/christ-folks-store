import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    // Send order details to Printful
    const res = await fetch("https://api.printful.com/orders", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PRINTFUL_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.error || "Failed to create order" },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, order: data.result });
  } catch (err) {
    console.error("Error creating order:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
