import React, {useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UnauthenticatedApp from "./unauthenticatedApp";
import AuthenticatedApp from "./authenticatedApp";

function App() {
  // const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  // useEffect(() => {
  //   const getToken = (async() => {
  //     const token = await getAccessTokenSilently();
  //     console.log(token);
  //   })
  //   getToken();
  // })

  // return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
  return <AuthenticatedApp />;
}

export default App;
