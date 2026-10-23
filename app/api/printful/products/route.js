import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.printful.com/store/products", {
      headers: { Authorization: `Bearer ${process.env.PRINTFUL_API_TOKEN}` },
    });
    const data = await res.json();
    return NextResponse.json({ products: data.result });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
