import { useCallback, useEffect, useState } from "react";
import "./notification.scss";
import { colord } from "colord";

type Props = {
  text: string;
  type?: "warn" | "error" | "success" | "info";
  duration?: number;
  animationDuration?: number;
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
  animationDuration = 1000,
}: Props) => {
  const [opening, setSituation] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSituation(false);

      const removeTimeoutId = setTimeout(() => {
        setVisible(false);
      }, animationDuration);

      return () => clearTimeout(removeTimeoutId);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [duration, animationDuration]);

  const notificationColor = colors[type];

  const Toast = useCallback(
    () =>
      visible && (
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
    [opening, visible, notificationColor, text]
  );

  return Toast;
};

export default useNotification;
