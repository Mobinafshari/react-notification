import "./styles/notification.scss";
import { colord } from "colord";

type Props = {
  text: string;
  type?: "warn" | "error" | "success" | "info";
};

const colors = {
  warn: "yellow",
  success: "green",
  error: "red",
  info: "white",
};
const useNotification: React.FC<Props> = ({ type = "success", text }) => {
  const notificationColor = colors[type];
  return (
    <section
      className="notification"
      style={{
        backgroundColor: notificationColor,
        borderColor: colord(notificationColor).darken(0.5).toHex(),
      }}>
      {text}
    </section>
  );
};

export default useNotification;
