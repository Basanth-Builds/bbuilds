import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  const adminId = process.env.ADMIN_USER_ID;

  if (!userId || userId !== adminId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const { id: clientId } = await params;

  try {
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(clientId);

    const client = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.emailAddresses[0]?.emailAddress || '',
      imageUrl: user.imageUrl,
      projects: Array.isArray(user.publicMetadata?.projects) ? user.publicMetadata.projects : [],
      createdAt: user.createdAt,
    };

    return NextResponse.json({ client });
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Client not found' }, { status: 404 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId } = await auth();
  const adminId = process.env.ADMIN_USER_ID;

  if (!userId || userId !== adminId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const { id: clientId } = await params;

  try {
    const body = await req.json();
    const { projects } = body;

    if (!Array.isArray(projects)) {
      return NextResponse.json({ error: 'Projects must be an array' }, { status: 400 });
    }

    const clerk = await clerkClient();

    // Get existing metadata and merge with new projects
    const user = await clerk.users.getUser(clientId);
    const existingMetadata = user.publicMetadata || {};

    await clerk.users.updateUserMetadata(clientId, {
      publicMetadata: {
        ...existingMetadata,
        projects,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Failed to update client' }, { status: 500 });
  }
}
