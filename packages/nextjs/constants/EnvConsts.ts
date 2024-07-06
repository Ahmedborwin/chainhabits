const NEXT_PUBLIC_ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? "";
const NEXT_PUBLIC_ALCHEMY_GAS_MANAGER_POLICY_ID = process.env.NEXT_PUBLIC_ALCHEMY_GAS_MANAGER_POLICY_ID ?? "";
const NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID ?? "";
const NEXT_PUBLIC_STRAVA_CLIENT_ID = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID ?? "";
const NEXT_PUBLIC_STRAVA_REDIRECT_URI = process.env.NEXT_PUBLIC_STRAVA_REDIRECT_URI ?? "";
const NEXT_PUBLIC_STRAVA_SCOPE = process.env.NEXT_PUBLIC_STRAVA_SCOPE ?? "";
const NEXT_PUBLIC_STRAVA_CLIENT_SECRET = process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET ?? "";
const VERCEL_PROJECT_PRODUCTION_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "";
const PORT = process.env.PORT ?? "";

export {
  NEXT_PUBLIC_ALCHEMY_API_KEY,
  NEXT_PUBLIC_ALCHEMY_GAS_MANAGER_POLICY_ID,
  NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  NEXT_PUBLIC_STRAVA_CLIENT_ID,
  NEXT_PUBLIC_STRAVA_REDIRECT_URI,
  NEXT_PUBLIC_STRAVA_SCOPE,
  NEXT_PUBLIC_STRAVA_CLIENT_SECRET,
  VERCEL_PROJECT_PRODUCTION_URL,
  PORT,
};