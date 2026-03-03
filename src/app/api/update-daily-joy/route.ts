import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { date, completed, score } = body;

  const client = await clerkClient();

  const user = await client.users.getUser(userId);
  const existingData = user.publicMetadata.dailyJoy || {};

  const updatedDailyJoy = {
    ...existingData,
    [date]: { completed, score },
  };

  await client.users.updateUser(userId, {
    publicMetadata: {
      ...user.publicMetadata,
      dailyJoy: updatedDailyJoy,
    },
  });

  return NextResponse.json({ success: true });
}