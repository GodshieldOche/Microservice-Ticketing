// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const { cookies } = request

    const jwt = cookies.get('session')

    if (request.nextUrl.pathname.includes('/auth')) {
        if (jwt) {
            return NextResponse.redirect(new URL('/', request.url))
        }

    }

    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!jwt) {
            return NextResponse.redirect(new URL('/auth/signin', request.url))
        }
    }



}

// See "Matching Paths" below to learn more
// export const config = {
//     matcher: ['/', '/signin/:path*', '/dashboard/:path*'],
// }