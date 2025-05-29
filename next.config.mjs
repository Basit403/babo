/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",


            }, {
                hostname: "static.wixstatic.com",
                protocol: "https",
            }

        ]
    }
};

export default nextConfig;
