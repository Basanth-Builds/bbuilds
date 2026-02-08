import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = await auth();
  const adminId = process.env.ADMIN_USER_ID;

  if (!userId || userId !== adminId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const clerk = await clerkClient();
    const usersResponse = await clerk.users.getUserList({ limit: 100 });
    const users = usersResponse.data;

    // Filter out the admin user, return only clients
    const clients = users
      .filter((u) => u.id !== adminId)
      .map((u) => ({
        id: u.id,
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.emailAddresses[0]?.emailAddress || '',
        imageUrl: u.imageUrl,
        projectCount: Array.isArray(u.publicMetadata?.projects) ? (u.publicMetadata.projects as unknown[]).length : 0,
        createdAt: u.createdAt,
      }));

    return NextResponse.json({ clients });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 });
  }
}
