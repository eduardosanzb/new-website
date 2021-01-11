import React, { Component } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import bookmark from "react-useanimations/lib/download";
import UseAnimations from "react-useanimations";

class Navbar extends Component {
  state = {
    withLogo: false,
    collapsed: true,
    sidebarModal: false,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  // Sidebar Modal
  toggleModal = () => {
    this.setState({
      sidebarModal: !this.state.sidebarModal,
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);

    this.menuActiveClass();
  }

  menuActiveClass = () => {
    let mainNavLinks = document.querySelectorAll(".navbar-nav li a");
    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY;
      mainNavLinks.forEach((link) => {
        if (link.hash) {
          let section = document.querySelector(link.hash);

          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    });
  };

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "navbar-collapse collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <React.Fragment>
        <nav
          id="navbar"
          className="navbar navbar-expand-md navbar-light fixed-top"
        >
          <div className="container">
            {this.state.withLogo && (
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </Link>
            )}
            <button
              onClick={this.toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>
            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => 100}
                    className="nav-link active"
                    href="#home"
                  >
                    Home
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -1}
                    className="nav-link"
                    href="#about"
                  >
                    About
                  </AnchorLink>
                </li>
                <li className="nav-item">
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -1}
                    className="nav-link"
                    href="#contact"
                  >
                    Contact
                  </AnchorLink>
                </li>
              </ul>

              <div className="side-nav">
                <UseAnimations
                  reverse
                  animation={bookmark}
                  pathCss="stroke: #63a4f7;"
                  size={25}
                  render={(eventProps, animationProps) => (
                    <Link
                      href="https://raw.githubusercontent.com/eduardosanzb/eduardosanzb/master/cv.pdf"
                      target="_blank"
                    >
                      <a
                        className="common-btn stroke-hover-white "
                        {...eventProps}
                      >
                        <span className="d-flex align-items-center">
                          Download CV
                          <div {...animationProps} />
                        </span>
                      </a>
                    </Link>
                  )}
                />
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
