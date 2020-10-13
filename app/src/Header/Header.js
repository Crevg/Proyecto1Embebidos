import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'reactstrap'
import Styles from "./Header.module.css"
import { withRouter } from 'react-router-dom';

class Header extends Component {
    link;

    checkPath = () => {
        let path = this.props.location.pathname;
        if (path === "/house/graphic") {
            this.link = <li >  <Link className={Styles.Link} to="/house/text"> Text-based  </Link>  </li>


        } else if (path === "/house/text") {
            this.link = <li className={Styles.NaviLink}> <Link className={Styles.Link} to="/house/graphic"> Blueprint </Link> </li>

        } else {
            this.link = <li className={Styles.NaviLink}> <Link className={Styles.Link} to="/house/graphic"> House </Link> </li>

        }
    }


    render() {
        this.checkPath();
        return (
            <div>
                <Navbar color="dark" light expand="xs">
                    <Nav className="mr-auto" navbar>
                        {this.link}
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <li>
                        <Link className={Styles.Link} to="/pictures/take"> 
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-camera" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                <path fillRule="evenodd" d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            </svg>
                            </Link>
                        </li>

                    </Nav>



                </Navbar>


            </div>

        )
    }
}

export default withRouter(Header);