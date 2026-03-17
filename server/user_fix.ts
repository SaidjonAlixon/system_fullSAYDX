import bcrypt from "bcrypt";
import { authStorage } from "./replit_integrations/auth/storage";
import { isLocalLogin } from "./replit_integrations/auth/localAuth";

export async function updateAdminPassword() {
  try {
    if (!isLocalLogin()) {
      return;
    }

    const username = (process.env.ADMIN_USERNAME || "admin").trim();
    const password = process.env.ADMIN_PASSWORD || "admin123";
    if (!username || !password) return;

    const passwordHash = await bcrypt.hash(password, 10);
    await authStorage.createOrUpdateLocalUser(username, passwordHash, "Admin", "User");
    console.log(`[user_fix] Admin credentials synced for username='${username}'.`);
  } catch (error) {
    console.error("[user_fix] Failed to sync admin credentials:", error);
  }
}
