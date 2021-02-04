import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const dbData = await db
    .collection("Data")
    .find({})
    .sort({ })
    .limit(100)
    .toArray();

  res.json(dbData);
};