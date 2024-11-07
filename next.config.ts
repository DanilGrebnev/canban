import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
