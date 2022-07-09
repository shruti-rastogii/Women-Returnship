import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '656773506516-uoduhvkf450lth27lu4npsl8ek8lla35.apps.googleusercontent.com';

function Logout(props) {
  const onSuccess = () => {
    console.log('Logout made successfully');
    props.setLoggedin(false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;