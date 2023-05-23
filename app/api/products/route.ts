//@ts-nocheck
import clientPromise from "@/lib/mongodb";


export async function GET(request: Request){
    try {
        const client = await clientPromise;
        const db = client.db('products');

        const url = new URL(request.url)
        const searchParams = url.searchParams;
        const limit = parseInt(searchParams.get("limit") || '1000')
        const name = searchParams.get("name")?.replace(/"/g, '')
        console.log(name);
        
        const regex = new RegExp(`^.*${name}.*$`)

        let items;
        if(name){
            items = await db.collection("items").find({
                name: regex
            }).limit(limit).toArray();
        } else {
            items = await db.collection("items").find().limit(limit).toArray();
        }

        return new Response(JSON.stringify(items))
    } catch(e: any) {
        console.error(e);
        throw new Error(e).message;
    }
}
