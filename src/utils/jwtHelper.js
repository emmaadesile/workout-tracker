import jwt from "jsonwebtoken";
import cookie from "cookie";

function createJwtCookie(userId, email) {
  const secretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign({ userId, email }, secretKey, {
    algorithm: "RS256",
    expiresIn: "30 days",
  });

  const jwtCookie = cookie.serialize("jwt", token, {
    secure: process.env.NETLIFY_DEV !== true,
    httpOnly: true,
    path: "/",
  });

  return jwtCookie;
}

export default createJwtCookie;
