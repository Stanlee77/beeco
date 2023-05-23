//@ts-nocheck
import bcrypt from "bcryptjs"
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST(request: Request){

    try {
        const {login, password} = await request.json()
        if (!login || !password) {
            return NextResponse.json({"error": "incorrect login or password"}, {status: 418})
        }
        const client = await clientPromise;
        const db = client.db('users');
        const users = await db.collection("users").findOne({login: login});
        if (!users) {
            return NextResponse.json({
                "error": "login not found, please sign-up"
            }, {status: 418})
        }
        
        // console.log(password)
        const passCheck = await bcrypt.compare(password, users["password"])
        if (!passCheck) {
            return NextResponse.json({
                "error": "incorrect login or password"
            }, {status: 418})
        }
        return new Response(JSON.stringify(users))
    } catch(e: any) {
        console.error(e);
        throw new Error(e).message;
    }
}