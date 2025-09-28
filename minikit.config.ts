const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  frame: {
    name: "Minikit",
    version: "1",
    iconUrl: "https://minikit-sigma.vercel.app/icon.png",
    homeUrl: "https://minikit-sigma.vercel.app",
    imageUrl: "https://minikit-sigma.vercel.app/image.png",
    splashImageUrl: "https://minikit-sigma.vercel.app/splash.png",
    splashBackgroundColor: "#1a1a1a",
    webhookUrl: "https://minikit-sigma.vercel.app/api/webhook",
    subtitle: "Connect and share instantly",
    description:
      "Experience the future of social networking with Minikit. Connect with friends, share moments, and discover communities through Web3 technology.",
    primaryCategory: "social",
  },
  accountAssociation: {
    header:
      "eyJmaWQiOjQ0NDUxNSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDIzNjA3ZjMxQUE5MTdlOTcxRjFFQ2Y4MzQ5NWZFNzIwNDVlMTcxNDkifQ",
    payload: "eyJkb21haW4iOiJtaW5pa2l0LXNpZ21hLnZlcmNlbC5hcHAifQ",
    signature:
      "MHhhZDhlNDU4YzMyNzY4NDkwNGJkMjc4MjYyOGRhNDAzYzUzMDllYmI1OTIwNmM4ZTQ1Yzg4MTg1NWM2MDVkOGM2NjRkNTRiOWNhZDRkNmU2YzBhZWQxNDA5NDU0NGI0YWI3MGUyYWU4NzFhZjBjZmM2MGVkYWVmMzIzMTI1YWMxNDFi",
  },
  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "my-minikit-app",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
