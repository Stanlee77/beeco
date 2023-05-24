import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function POST(request: Request) {
  try {
    const { barcode, name, material, dump_into } = await request.json();

    if (!barcode) {
      return NextResponse.json(
        { error: "barcode is not defined" },
        { status: 418 }
      );
    }
    if (!material) {
      return NextResponse.json(
        { error: "material is not defined" },
        { status: 418 }
      );
    }
    if (!name) {
      return NextResponse.json(
        { error: "name is not defined" },
        { status: 418 }
      );
    }
    if (!dump_into) {
      return NextResponse.json(
        { error: "dump_into is not defined" },
        { status: 418 }
      );
    }

    const client = await clientPromise;
    const db = client.db("products");
    const materials = await db.collection("materials").find({}).toArray();
    const materialsArr = new Array();
    materials.forEach((material: any) => {
      materialsArr.push(material["material"]);
    });

    const exists = materialsArr.includes(material);
    if (!exists) {
      return NextResponse.json(
        { error: "such material doesn't exist" },
        { status: 418 }
      );
    }
    const references: { [key: string]: string } = {
      plastic: "646cad8ed5958054ccfdef20",
      metal: "646cadc5d5958054ccfdef23",
      glass: "646cadd2d5958054ccfdef24",
      wood: "646caddfd5958054ccfdef25",
      paper: "646cae05d5958054ccfdef27",
      cloth: "646cae1cd5958054ccfdef28",
    };
    await db.collection("items").insertOne({
      barcode,
      name,
      material: new ObjectId(references[material]),
      dump_into,
    });
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
}
