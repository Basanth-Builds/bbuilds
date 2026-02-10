import { auth, clerkClient } from "@clerk/nextjs/server";

export const ADMIN_EMAIL = 'basanth@bbuilds.org';

export async function checkIsAdmin() {
    const { userId } = await auth();
    if (!userId) return false;

    try {
        const clerk = await clerkClient();
        const user = await clerk.users.getUser(userId);
        const email = user.emailAddresses[0]?.emailAddress;
        return email === ADMIN_EMAIL;
    } catch (error) {
        console.error("Error checking admin status:", error);
        return false;
    }
}
