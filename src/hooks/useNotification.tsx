import { useCallback, useState } from "react";
import "./notification.scss";
import { colord } from "colord";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

type ToastProps = {
  id: number;
  text: string;
  type?: "warn" | "error" | "success" | "info";
};

type HookProps = {
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
  duration = 5000,
  animationDuration = 900,
}: HookProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  // Trigger a new toast
  const trigger = useCallback(
    (text: string, type: ToastProps["type"] = "success") => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, text, type }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration + animationDuration);
    },
    [duration, animationDuration]
  );

  const Toasts = useCallback(
    () => (
      <div className="toast-container">
        {toasts.map(({ id, text, type ="success" }) => {
          const notificationColor = colors[type];
          return (
            <section
              key={id}
              className="notification notification-open"
              style={{
                backgroundColor: notificationColor,
                borderColor: colord(notificationColor).darken(0.1).toHex(),
              }}>
              <div className="notification-text">
                {icons[type]}
                {text}
              </div>
              <AiOutlineClose
                onClick={() =>
                  setToasts((prev) => prev.filter((toast) => toast.id !== id))
                }
                fill="currentColor"
                style={{ cursor: "pointer" }}
              />
            </section>
          );
        })}
      </div>
    ),
    [toasts]
  );

  return { trigger, Toasts };
};

export default useNotification;
