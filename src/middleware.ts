import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import auth from './firebase/auth';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return;
}
// See "Matching Paths" below to learn more
