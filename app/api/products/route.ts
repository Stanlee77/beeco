import clientPromise from "@/lib/mongodb";


export async function GET(request: Request){

    try {
        const client = await clientPromise;
        const db = client.db('products');
        const items = await db.collection("items").find({}).limit(20).toArray();
        return new Response(JSON.stringify(items))
    } catch(e: any) {
        console.error(e);
        throw new Error(e).message;
    }
}