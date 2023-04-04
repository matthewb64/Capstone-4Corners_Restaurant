import React from "react";
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from "../components/FooterComponent";
import AccountSignInTemplate from "src/templates/AccountSignInTemplate";
import AccountDashboardTemplate from "src/templates/AccountDashboardTemplate";
import AccountSignUpTemplate from "src/templates/AccountSignUpTemplate";

function AccountVariant(props)
{
  if(props.url === "/account")
  {
    return <AccountDashboardTemplate/>;
  }
  if(props.url === "/account/signin")
  {
    return <AccountSignInTemplate/>;
  }
  if(props.url === "/account/signup")
  {
    return <AccountSignUpTemplate/>
  }
}

function AccountPage(props) {

  return (
    <div className="AccountPage">
      <HeaderComponent/>
      <AccountVariant url={props.url}/>
      <FooterComponent/>
    </div>
  );
}

export default AccountPage;
