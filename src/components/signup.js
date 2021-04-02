import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp
} from '@aws-amplify/ui-react';

const SignUp = () => {
  return ( 
    <div className = "signIn" >
      <AmplifyAuthenticator usernameAlias = "username" >

      <AmplifySignUp slot = "sign-up"
      usernameAlias = "email"
      formFields = {
        [{
            type: "email",
            label: "Custom email Label",
            placeholder: "custom email placeholder",
            required: true,
          },
          {
            type: "password",
            label: "Custom Password Label",
            placeholder: "custom password placeholder",
            required: true,
          },
          {
            type: "preferred_username",
            label: "Custom user Label",
            placeholder: "custom Phone placeholder",
            required: false,
          },
          {
            type: "phone_number",
            label: "Custom phone Label",
            placeholder: "custom Phone placeholder",
            required: false,
          },
          {
            type: "name",
            label: "Custom name Label",
            placeholder: "custom Phone placeholder",
            required: false,
          },
          {
            type: "picture",
            label: "Custom picture Label",
            placeholder: "custom Phone placeholder",
            required: false,
          },
          {
            type: "family_name",
            label: "Custom family name Label",
            placeholder: "custom Phone placeholder",
            required: false,
          },
        ]
      }
      /> 
      <AmplifySignIn slot = "sign-in"
      usernameAlias = "username" / >
      </AmplifyAuthenticator>        
    </div>
  );
}

export default SignUp;