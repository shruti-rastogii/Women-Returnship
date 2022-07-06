import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from './refreshToken';

const clientId =
  '656773506516-uoduhvkf450lth27lu4npsl8ek8lla35.apps.googleusercontent.com';

function GLogin(props) {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    props.setLoggedin(true)
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop:"500px"}}
        isSignedIn={true}
      />
    </div>
  );
}

export default GLogin;