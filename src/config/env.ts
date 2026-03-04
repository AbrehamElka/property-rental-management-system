import dotenv from "dotenv";

dotenv.config();

function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const env = {
  port: Number(getEnv("PORT")),
  databaseUrl: getEnv("DATABASE_URL"),
  jwtSecret: getEnv("JWT_SECRET"),
};
