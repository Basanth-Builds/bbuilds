import { auth, clerkClient } from "@clerk/nextjs/server";
import { supabaseAdmin } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST() {
    const { userId } = await auth();

    if (!userId) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const clerk = await clerkClient();
        const user = await clerk.users.getUser(userId);

        const { data: existingProfile, error: fetchError } = await supabaseAdmin
            .from("profiles")
            .select("*")
            .eq("clerk_id", userId)
            .single();

        if (fetchError && fetchError.code !== "PGRST116") {
            throw fetchError;
        }

        const profileData = {
            clerk_id: userId,
            email: user.emailAddresses[0].emailAddress,
            first_name: user.firstName,
            last_name: user.lastName,
            avatar_url: user.imageUrl,
            updated_at: new Date().toISOString(),
        };

        if (!existingProfile) {
            const { error: insertError } = await supabaseAdmin
                .from("profiles")
                .insert([{ ...profileData, created_at: new Date().toISOString() }]);

            if (insertError) throw insertError;
        } else {
            const { error: updateError } = await supabaseAdmin
                .from("profiles")
                .update(profileData)
                .eq("clerk_id", userId);

            if (updateError) throw updateError;
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Sync error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
