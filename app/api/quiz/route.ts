//@ts-nocheck

import clientPromise from "@/lib/mongodb";

export async function GET(request: Request){

    try {
        const client = await clientPromise;
        const db = client.db("products")
        const toGuess = await db.collection("items").aggregate([{ $sample: { size: 1 } }]).toArray()
        return new Response(JSON.stringify(toGuess))

    } catch(e: any) {
        console.error(e);
        throw new Error(e).message;
    }
} 