import React, { useState } from 'react';
import { MDBSideNav, MDBBtn } from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <MDBSideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            hidden
            triggerOpening={show}
            breakWidth={1300}
            className="deep-purple darken-4"
          >
            hi
          </MDBSideNav>
          <MDBBtn onClick={function() { setShow(!show) }} >asd</MDBBtn>
    </div>
  );
}

export default App;
