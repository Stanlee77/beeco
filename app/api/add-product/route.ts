import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const {barcode, name, material, dump_into} = await request.json()
    
        if(!barcode){
            return NextResponse.json({'error': 'barcode is not defined'}, {status: 418})
        }
        if(!material) {
            return NextResponse.json({'error': 'material is not defined'}, {status: 418})
        }
        if(!name){
            return NextResponse.json({'error': 'name is not defined'}, {status: 418})
        }
        if(!dump_into){
            return NextResponse.json({'error': 'dump_into is not defined'}, {status: 418})
        }
        const client = await clientPromise;
        const db = client.db('products');
        await db.collection("items").insertOne({
            barcode,
            name,
            material,
            dump_into
        });
        return NextResponse.json({'message': 'OK'}, {status: 200});
    } catch(e: any) {
        console.error(e);
        throw new Error(e).message;
    }
}