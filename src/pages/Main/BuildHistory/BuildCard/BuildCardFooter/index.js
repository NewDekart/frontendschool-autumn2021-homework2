import classNames from "classnames";
import format from "date-fns/format";
import russianLocale from "date-fns/locale/ru";
import intervalToDuration from "date-fns/intervalToDuration";
import formatDuration from "date-fns/formatDuration";

import { ReactComponent as DateIcon } from "../../../../../assets/images/svg/date.svg";
import { ReactComponent as TimeIcon } from "../../../../../assets/images/svg/time.svg";

const BuildCardFooter = ({ date, time }) => {

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
      )
}

export default BuildCardFooter
