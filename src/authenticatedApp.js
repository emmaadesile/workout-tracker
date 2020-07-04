import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  place-items: center;
`

function AuthenticatedApp() {
  return (
    <Container>
      Welcome Jason Memoa
    </Container>
  )
}

export default AuthenticatedApp;