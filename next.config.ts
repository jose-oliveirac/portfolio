import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Our root layout lives in app/[locale], so the 404 page needs its own document
    globalNotFound: true,
  },
  images: {
    // 90 is used for the profile photo, where sharpness matters most
    qualities: [75, 90],
  },
};

export default nextConfig;
