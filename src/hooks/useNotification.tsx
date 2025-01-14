import { useCallback, useEffect, useState } from "react";
import "./notification.scss";
import { colord } from "colord";

type Props = {
  text: string;
  type?: "warn" | "error" | "success" | "info";
  duration?: number;
};

const colors = {
  warn: "#FEEC37",
  success: "#C2FFC7",
  error: "#FF748B",
  info: "white",
};
const useNotification = ({
  type = "success",
  text,
  duration = 5000,
}: Props) => {
  const [opening, setSituation] = useState(true);
  console.log(opening)
  useEffect(() => {
    setTimeout(() => {
      setSituation(false);
    }, duration);
  } , [duration])
  const notificationColor = colors[type];
  const Toast = useCallback(
    () => (
      <section
        className={`notification ${
          opening ? "notification-open" : "notification-close"
        }`}
        style={{
          backgroundColor: notificationColor,
          borderColor: colord(notificationColor).darken(0.3).toHex(),
        }}>
        {text}
      </section>
    ),
    [opening]
  );
  return Toast;
};

export default useNotification;
