import classNames from "classnames"

import "./index.css"


const FooterItem = ({ children, right = false }) => {
    const itemClassName = classNames("footer-item", right && "footer-right")

    return <div className={itemClassName}>
        {children}
    </div>
}

export default FooterItem
