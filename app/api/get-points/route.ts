import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request){
    try {
        const url = new URL(request.url)
        const login = url.searchParams.get("login");
        const client = await clientPromise;
        const db = client.db('users');
        const user = await db.collection("users").findOne({login: login});
        if (!user) {
            return NextResponse.json({
                "error": "login not found"
            }, {status: 418})
        }


        return NextResponse.json({"login": user["login"], "points": user["points"]});
    } catch(e: any) {
        console.error(e);
        throw new Error(e).message;
    }
}