import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const dbData = await db
    .collection("Data")
    .find({})
    .sort({})
    .toArray();

  res.json(dbData);
};