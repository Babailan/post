// middleware.ts
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return;
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/:path*',
}