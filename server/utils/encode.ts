import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";

const KEY = crypto
    .createHash("sha256")
    .update( "ENCRYPTION_KEY")
    .digest();

export function encode(value: string | number): string {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);

    let encrypted = cipher.update(String(value), "utf8", "base64");
    encrypted += cipher.final("base64");

    return iv.toString("base64") + ":" + encrypted;
}

export function decode(encrypted: string): string | null {
  try {
    const [ivStr, content] = encrypted.split(":");

    const iv = Buffer.from(ivStr, "base64");
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);

    let decrypted = decipher.update(content, "base64", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
  } catch (err: any) {
    console.error("❌ Decode failed:", err.message);
    return null;
  }
}
