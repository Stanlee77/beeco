//@ts-nocheck

import clientPromise from "@/lib/mongodb";

export async function POST(request: Request){

    try {
        const {user, points} = await request.json()
        const client = await clientPromise;
        const db = client.db("users")
        await db.collection("users").updateOne(
            {"login": user},
            {$inc: {"points": points}}
          )
          
        const users = await db.collection("users").find({login: user}).toArray();
        return new Response(JSON.stringify(users))

    } catch(e: any) {
        console.error(e);
        throw new Error(e).message;
    }
} 