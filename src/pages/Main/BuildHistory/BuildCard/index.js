import classNames from "classnames";
import format from "date-fns/format";
import russianLocale from "date-fns/locale/ru";
import intervalToDuration from "date-fns/intervalToDuration";
import formatDuration from "date-fns/formatDuration";

import Card from "../../../../components/Card";

import { ReactComponent as ErrorIcon } from "../../../../assets/images/svg/error.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/images/svg/success.svg";
import { ReactComponent as ProgressIcon } from "../../../../assets/images/svg/progress.svg";
import { ReactComponent as BranchIcon } from "../../../../assets/images/svg/branch.svg";
import { ReactComponent as UserIcon } from "../../../../assets/images/svg/user.svg";
import { ReactComponent as DateIcon } from "../../../../assets/images/svg/date.svg";
import { ReactComponent as TimeIcon } from "../../../../assets/images/svg/time.svg";

import "./index.css";

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
  const { icon, header } = getIconAndHeader();
  const body = getBody();
  const footer = getFooter();

  return <Card icon={icon} header={header} body={body} footer={footer} />;

  function getIconAndHeader() {
    const { icon, colorClassName } = getHeaderDecorByStatus();

    return {
      icon,
      header: (
        <>
          <p
            className={classNames("build-number", colorClassName)}
          >{`#${number}`}</p>
          <p className="build-message">{message}</p>
        </>
      ),
    };
  }

  function getHeaderDecorByStatus() {
    switch (status) {
      case "success": {
        return {
          icon: <SuccessIcon />,
          colorClassName: "c-success",
        };
      }
      case "progress": {
        return {
          icon: <ProgressIcon />,
          colorClassName: "c-progress",
        };
      }
      case "error": {
        return {
          icon: <ErrorIcon />,
          colorClassName: "c-error",
        };
      }
      default: {
        return {
          icon: <ErrorIcon />,
        };
      }
    }
  }

  function getBody() {
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

  function getFooter() {
    const formattedDate = format(date, "dd MMM hh:mm", {
      locale: russianLocale,
    }).replace(".", ",");
    const formattedTime = formatDuration(
      intervalToDuration({ start: 0, end: time }),
      { format: ["hours", "minutes"], locale: russianLocale }
    ).replace(/мин.+/, "мин");
    return (
      <>
        <div className={classNames("build-card-elem", "opacity-65")}>
          <DateIcon className="opacity-30" />
          <span>{formattedDate}</span>
        </div>
        <div className={classNames("build-card-elem", "opacity-65")}>
          <TimeIcon className="opacity-30" />
          <span>{formattedTime}</span>
        </div>
      </>
    );
  }
};

export default BuildCard;
