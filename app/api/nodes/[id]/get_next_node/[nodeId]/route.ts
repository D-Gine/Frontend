import { NextRequest, NextResponse } from "next/server";
import { API_URL } from "@/constants/api_url";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; nodeId: string }> },
) {
  const { id, nodeId } = await params;
  const r = await fetch(`${API_URL}/api/nodes/${id}/get_next_node/${nodeId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: await req.text(),
  });
  return new NextResponse(await r.text(), {
    status: r.status,
    headers: { "Content-Type": "application/json" },
  });
}