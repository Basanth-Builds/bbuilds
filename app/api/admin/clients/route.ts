import { auth, clerkClient } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  const clerk = await clerkClient();
  const userObj = await clerk.users.getUser(userId);
  const userEmail = userObj.emailAddresses[0]?.emailAddress;

  if (userEmail !== 'basanth@bbuilds.org') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const { data: profiles, error } = await supabaseAdmin
      .from('profiles')
      .select(`
        *,
        projects (id)
      `)
      .neq('email', 'basanth@bbuilds.org');

    if (error) throw error;

    const clients = profiles.map((p: any) => ({
      id: p.clerk_id,
      firstName: p.first_name,
      lastName: p.last_name,
      email: p.email,
      imageUrl: p.avatar_url,
      projectCount: p.projects?.length || 0,
      createdAt: p.created_at,
    }));

    return NextResponse.json({ clients });
  } catch (error: any) {
    console.error('Error fetching clients:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
