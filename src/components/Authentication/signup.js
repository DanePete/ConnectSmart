import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp
} from '@aws-amplify/ui-react';

const SignUp = () => {
  return ( 
    <div className = "signIn" >
      <AmplifyAuthenticator usernameAlias = "preferred_username" >
        <AmplifySignUp slot = "sign-up"
          usernameAlias = "email"
          formFields = {
            [
              {
                type: "preferred_username",
                label: "Username",
                placeholder: "",
                required: true,
              },
              {
                type: "email",
                label: "Email Address",
                placeholder: "example@example.com",
                required: true,
              },
              {
                type: "password",
                label: "Password",
                placeholder: "",
                required: true,
              },
              // {
              //   type: "phone_number",
              //   label: "Custom phone Label",
              //   placeholder: "custom Phone placeholder",
              //   required: false,
              // },
              {
                type: "name",
                label: "First Name",
                placeholder: "",
                required: false,
              },
              // {
              //   type: "picture",
              //   label: "Custom picture Label",
              //   placeholder: "custom Phone placeholder",
              //   required: false,
              // },
              {
                type: "family_name",
                label: "Last Name",
                placeholder: "",
                required: false,
              },
            ]
          }
        /> 
        <AmplifySignIn slot = "sign-in" usernameAlias = "username" / >
      </AmplifyAuthenticator>        
    </div>
  );
}

export default SignUp;