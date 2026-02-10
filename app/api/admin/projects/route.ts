import { auth, clerkClient } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';
import { NextResponse } from 'next/server';

const ADMIN_EMAIL = 'basanth@bbuilds.org';

async function verifyAdmin() {
    const { userId } = await auth();
    if (!userId) return false;
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    return user.emailAddresses[0]?.emailAddress === ADMIN_EMAIL;
}

export async function POST(req: Request) {
    if (!(await verifyAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    try {
        const body = await req.json();
        const { client_id, name, description, status, progress, github_url, demo_url } = body;

        const { data, error } = await supabaseAdmin
            .from('projects')
            .insert([{
                client_id,
                name,
                description,
                status: status || 'planning',
                progress: progress || 0,
                github_url,
                demo_url,
                updated_at: new Date().toISOString()
            }])
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({ project: data });
    } catch (error: any) {
        console.error('Error creating project:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(req: Request) {
    if (!(await verifyAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    try {
        const body = await req.json();
        const { id, ...updates } = body;

        const { data, error } = await supabaseAdmin
            .from('projects')
            .update({
                ...updates,
                updated_at: new Date().toISOString()
            })
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;

        return NextResponse.json({ project: data });
    } catch (error: any) {
        console.error('Error updating project:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    if (!(await verifyAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        const { error } = await supabaseAdmin
            .from('projects')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Error deleting project:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
