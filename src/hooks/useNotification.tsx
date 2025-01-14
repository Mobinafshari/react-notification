import { useCallback, useEffect, useState } from "react";
import "./notification.scss";
import { colord } from "colord";
import { ImCross } from "react-icons/im";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

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
  info: "#C4D9FF",
};
const icons = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warn: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

const useNotification = ({
  type = "success",
  text,
  duration = 5000,
}: Props) => {
  const [opening, setSituation] = useState(true);
  const [visible, setVisible] = useState(true);
  const [toastDuration, setToastDuration] = useState(duration);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSituation(false);

      const removeTimeoutId = setTimeout(() => {
        setVisible(false);
      }, 900);

      return () => clearTimeout(removeTimeoutId);
    }, toastDuration);

    return () => clearTimeout(timeoutId);
  }, [toastDuration]);

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
          <div className="notification-text">
            {icons[type]}
            {text}
          </div>
          <ImCross
            onClick={() => setToastDuration(0)}
            fill="currentColor"
            style={{ width: "12px", height: "12px", cursor: "pointer" }}
          />
        </section>
      ),
    [opening, visible, notificationColor, text, type]
  );

  return Toast;
};

export default useNotification;
