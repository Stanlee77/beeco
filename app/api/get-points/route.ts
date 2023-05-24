import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("users");
    const collection = db.collection("users");
    const receivedUsers = await collection.find({}).toArray();

    const modifiedReceivedUsers = receivedUsers.map((user: any) => {
      return {
        _id: user?._id,
        points: user?.points || null,
      };
    });

    return new Response(JSON.stringify(modifiedReceivedUsers));
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
}
