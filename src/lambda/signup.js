import createClient from "../utils/dbHelper";
import bcrypt from "bcrypt";
import createJwtCookie from "../utils/jwtHelper";

export default async function handler(event) {
  const dbClient = createClient();
  let errorStatusCode = 500;

  try {
    await dbClient.connect();
    const users = dbClient.usersCollection;

    const { email, password } = JSON.parse(event.body);
    const existingUser = await users.findOne({ email });

    if (existingUser !== null) {
      errorStatusCode = 409;
      throw new Error(`A user already exists with the email ${email}`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { insertedId } = users.insertOne({ email, password: hashedPassword });

    return {
      statusCode: 200,
      headers: {
        "Set-Cookie": createJwtCookie(insertedId, email),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: insertedId, email }),
    };
  } catch (error) {
    return {
      statusCode: errorStatusCode,
      body: JSON.stringify({ message: error.message }),
    };
  } finally {
    dbClient.close();
  }
}
