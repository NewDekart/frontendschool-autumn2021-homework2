import { ReactComponent as BranchIcon } from "../../../../../assets/images/svg/branch.svg";
import { ReactComponent as UserIcon } from "../../../../../assets/images/svg/user.svg";

const BuildCardBody = ({ branchName, commitHash, userInfo }) => {
    return (
        <>
            <div className="build-card-elem">
                <BranchIcon className="opacity-30" />
                <span>{branchName}</span>
                <span className="opacity-65">{commitHash}</span>
            </div>
            <div className="build-card-elem">
                <UserIcon className="opacity-30" />
                <span>{userInfo}</span>
            </div>
        </>
    );
}

export default BuildCardBody
