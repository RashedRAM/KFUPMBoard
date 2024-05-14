import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// This route is for the purpose of handling the callback from the OAuth provider
export async function GET(request){
    const requestURL = new URL(request.url);
    const code = requestURL.searchParams.get('code');

    if(code){
        const supabase = createRouteHandlerClient({ cookies });
        await supabase.auth.exchangeCodeForSession(code);
    }

    return NextResponse.redirect(requestURL.origin);
}