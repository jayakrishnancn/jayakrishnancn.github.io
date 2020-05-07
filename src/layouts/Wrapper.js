import React, { useState } from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/index.css'
import '../components/dark.sass'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
const Layout = ({ children }) => {

    const [darkTheme, setTheme] = useState(false)

    return (<>
        <button className="btn btn-link theme-toggle" onClick={() => { setTheme(!darkTheme) }} >
            {darkTheme ? <FontAwesomeIcon className="theme-icon" icon={faMoon} /> : <FontAwesomeIcon className="theme-icon sun" icon={faSun} />}
        </button>

        <main className={darkTheme ? 'theme dark' : 'theme'}>{children}</main>
    </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
