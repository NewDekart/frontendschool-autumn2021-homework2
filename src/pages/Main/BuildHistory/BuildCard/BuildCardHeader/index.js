import classNames from "classnames";

import "./index.css"

function getHeaderClassNameByStatus (status) {
    switch (status) {
        case "success": {
          return "c-success"
        }
        case "progress": {
          return "c-progress"
        }
        case "error": {
          return "c-error"
        }
        default: {
            return ""
        }
      }
}

const BuildCardHeader = ({ status, number, message }) => {

    const colorClassName = getHeaderClassNameByStatus(status)

    return (
        <>
          <p
            className={classNames("build-number", colorClassName)}
          >{`#${number}`}</p>
          <p className="build-message">{message}</p>
        </>
    )
}

export default BuildCardHeader
