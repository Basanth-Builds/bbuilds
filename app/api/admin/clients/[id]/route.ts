import { auth, clerkClient } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

const ADMIN_EMAIL = 'basanth@bbuilds.org';

async function verifyAdmin() {
  const { userId } = await auth();
  if (!userId) return false;
  const clerk = await clerkClient();
  const user = await clerk.users.getUser(userId);
  return user.emailAddresses[0]?.emailAddress === ADMIN_EMAIL;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await verifyAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const { id: clientId } = await params;

  try {
    const { data: profile, error: profileError } = await supabaseAdmin
      .from('profiles')
      .select('*, projects(*)')
      .eq('clerk_id', clientId)
      .single();

    if (profileError) throw profileError;

    const client = {
      id: profile.clerk_id,
      firstName: profile.first_name,
      lastName: profile.last_name,
      email: profile.email,
      imageUrl: profile.avatar_url,
      projects: profile.projects || [],
      createdAt: profile.created_at,
    };

    return NextResponse.json({ client });
  } catch (error: any) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Client not found' }, { status: 404 });
  }
}
