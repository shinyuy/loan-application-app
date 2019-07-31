import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    name: "My Account",
    linkTo: "/applicant/:_id"
  },
  {
    name: "User Information",
    linkTo: "/user/profile"
  }
];

const admin = [
  {
    name: "Site Info",
    linkTo: "/admin/site_info"
  },
  {
    name: "User Accounts",
    linkTo: "/admin/userAccounts"
  },
  {
    name: "Customer Savings",
    linkTo: "/admin/savings"
  },
  {
    name: "Applicants",
    linkTo: "/dashboard"
  },
  {
    name: "Admins",
    linkTo: "/admins"
  },
  {
    name: "Validated ",
    linkTo: "/validated_applicants"
  }
];

function UserLayout(props) {
  const generateLinks = links =>
    links.map((item, i) => (
      <div>
        <Link to={item.linkTo} key={i}>
          {item.name}
        </Link>
      </div>
    ));

  return (
    <div className="container" style={{paddingTop: "150px", paddingBottom: "150px"}}>
      <div className="user_container">
        <div className="user_left_nav">
          <h2>My Account</h2>
          <div className="links">{generateLinks(links)}</div>
           {
                 props.user.isAdmin ? (
                    <div>
                      <h2>Admin</h2>
                      <div className="links">{generateLinks(admin)}</div>
                    </div>
                  ) : null
           }
        </div>
        <div className="user_right">{props.children}</div>
      </div>
    </div>
  );
}

export default UserLayout;
