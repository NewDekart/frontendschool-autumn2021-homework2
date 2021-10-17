import Card from "../../../../components/Card";
import BuildCardIcon from "./BuildCardIcon";
import BuildCardHeader from "./BuildCardHeader";
import BuildCardBody from "./BuildCardBody";

import "./index.css";
import BuildCardFooter from "./BuildCardFooter";

const BuildCard = ({
  status,
  number,
  message,
  branchName,
  commitHash,
  userInfo,
  date,
  time,
}) => {

  return <Card
    icon={<BuildCardIcon status={status}/>}
    header={<BuildCardHeader status={status} number={number} message={message} />}
    body={<BuildCardBody branchName={branchName} commitHash={commitHash} userInfo={userInfo} />}
    footer={<BuildCardFooter date={date} time={time} />}
  />;
};

export default BuildCard;
