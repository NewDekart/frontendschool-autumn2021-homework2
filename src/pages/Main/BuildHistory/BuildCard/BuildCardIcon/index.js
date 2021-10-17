import { ReactComponent as ErrorIcon } from "../../../../../assets/images/svg/error.svg";
import { ReactComponent as SuccessIcon } from "../../../../../assets/images/svg/success.svg";
import { ReactComponent as ProgressIcon } from "../../../../../assets/images/svg/progress.svg";

const BuildCardIcon = ({ status }) => {
    switch (status) {
        case "success": {
          return <SuccessIcon />
        }
        case "progress": {
          return <ProgressIcon />
        }
        case "error": {
          return <ErrorIcon />
        }
        default: {
          return <ErrorIcon />
        }
    }
}

export default BuildCardIcon
