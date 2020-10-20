import moment from "moment";

export const dateFormat = (date) =>
  moment(date).isSame(moment(), "day") && !moment(date).isBefore(moment())
    ? moment(date).format("h:mm a")
    : moment(date).isSame(moment().subtract(1, "day"), "date")
    ? "Yesterday"
    : moment(date).format("MMM Do");
