import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class NavBar extends Component {
  state = {
    page: [
      {
        name: "Home",
        linkTo: "/",
        public: true
      },
      {
        name: "About Us",
        linkTo: "/about",
        public: true
      },
      {
        name: "Contact Us",
        linkTo: "/contact",
        public: true
      },
      {
        name: "Apply For Loan",
        linkTo: "/apply",
        public: false
      }
    ],
    user: [
      {
        name: "My Account",
        linkTo: "/user/dashboard",
        public: false
      },
      {
        name: "Login",
        linkTo: "/login",
        public: true
      },
      {
        name: "Register",
        linkTo: "/register",
        public: true
      },
      {
        name: "Log out",
        linkTo: "/login",
        public: false
      }
    ]
  };

  logoutHandler = () => {
    axios
      .get("http://localhost:3000/api/logout")
      .then(res => {
        if (res.data.success) {
          this.props.history.push("/");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

 
  cartLink = (item,i) => {
    const user = this.props.user.userData;

    return (
        <div className="cart_link" key={i}>
            <span>{user.cart ? user.cart.length:0}</span>
            <Link to={item.linkTo}>
                {item.name}
            </Link>
        </div>
    )
}

  defaultLink = (item,i) => (
    item.name === 'Log out' ?
        <div className="log_out_link"
            key={i}
            onClick={()=> this.logoutHandler()}
        >
            {item.name}
        </div>

    :
    <Link to={item.linkTo} key={i}>
        {item.name}
    </Link>
)


  showLinks = type => {
    let list = [];
    if (this.props.user) {
      type.forEach(item => {
        if (!this.props.user.isAuth) {
          if (item.public === true) {
            list.push(item);
          }
        }else {
          if (item.name !== "Login" && item.name !== "Register") {
            list.push(item);
          }
        }
      });
    }

    return list.map((item, i) => {
      if (item.name !== "My Cart") {
        return this.defaultLink(item, i);
      } else {
        return this.cartLink(item, i);
      }
    });
  };


  render() {
      return (
        <nav className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">
              <Link to="/">Credit Union</Link>
            </div>
          </div>
          <div className="right">
            <div className="top">
            {this.showLinks(this.state.user)}
            </div>
          <div className="bottom">
                {this.showLinks(this.state.page)}  
          </div>
        </div>
        </div>
      </nav>
      )
  }
}
export default NavBar;
