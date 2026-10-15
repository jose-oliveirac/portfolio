import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't advertise the framework in every response ("X-Powered-By: Next.js")
  poweredByHeader: false,
  experimental: {
    // Our root layout lives in app/[locale], so the 404 page needs its own document
    globalNotFound: true,
  },
  images: {
    // 90 is used for the profile photo, where sharpness matters most
    qualities: [75, 90],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Browsers must trust the declared file type (no guessing a .jpg is a script)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Other sites can't embed the portfolio in an <iframe> (clickjacking)
          { key: "X-Frame-Options", value: "DENY" },
          // Links to other sites only reveal the domain, never the full URL
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // The site never needs these device features, so nothing can ask for them
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
