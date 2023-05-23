//@ts-nocheck
import bcrypt from "bcryptjs"
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST(request: Request){

    try {
        const {login, password, retype_password} = await request.json()
        if (!login || !password) {
            return NextResponse.json({"error": "incorrect login or password"}, {status: 418})
        }
        console.log("")
        if (password != retype_password) {
            return NextResponse.json({"error": "passwords are not the same"}, {status: 418})
        }

        const client = await clientPromise;
        const db = client.db("users");
        const hashedPassword = await bcrypt.hash(password, 10)
        const exists = await db.collection("users").findOne({login: login});
        if (exists) {
            return NextResponse.json({"error": "user already exists"}, {status: 418})
        }
        await db.collection("users").insertOne({
            login,
            hashedPassword
        });
        return new Response(JSON.stringify(exists))
        
    } catch(e: any) {
        console.error(e);
        throw new Error(e).message;
    }
}