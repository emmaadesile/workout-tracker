import React from "react";

function AunthenticatedApp(props) {
  return (
    <div>
      <p>Authenticated App</p>
    </div>
  );
}

export default AunthenticatedApp;

// 1. Connect to the database and get a reference to the `users` collection
// 2. Get the email and password from the request body
// 3. Check to see if the user already exists, if so return error (409 Conflict)
// 4. Get a salted hash of the password
// 5. Insert the email and the hashed password in the `users` collection
// 6. Get the secret key, used to sign the JWT, from an environment variable
// 7. Create a JWT with the registered user and email as the payload
// 8. Serialize the JWT in a secure http-only cookie
// 9. Return the user id and a Set-Cookie header with the JWT cookie