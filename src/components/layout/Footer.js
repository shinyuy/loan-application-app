import React from 'react'

function Footer() {
    return (
        <footer className="page-footer blue darken-3" >
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">XYZ Credit Union</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">XYZ Credit Union Branch 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">XYZ Credit Union Branch 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">XYZ Credit Union Branch 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">XYZ Credit Union Branch 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2019 Copyright Reserved
            <a className="grey-text text-lighten-4 right" href="#!">Main Branch</a>
            </div>
          </div>
        </footer>
            
    )
}

export default Footer
