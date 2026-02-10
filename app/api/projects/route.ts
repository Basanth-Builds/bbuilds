import { auth } from "@clerk/nextjs/server";
import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { data: projects, error } = await supabaseAdmin
            .from("projects")
            .select("*")
            .eq("client_id", userId)
            .order("updated_at", { ascending: false });

        if (error) throw error;

        return NextResponse.json({ projects });
    } catch (error: any) {
        console.error("Fetch projects error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
