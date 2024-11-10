import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/dashboard-list",
                permanent: true,
            },
        ]
    },
}

export default nextConfig
