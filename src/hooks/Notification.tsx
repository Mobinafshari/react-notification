import "./notification.scss";
import { colord } from "colord";

type Props = {
  text: string;
  type?: "warn" | "error" | "success" | "info";
};

const colors = {
  warn: "#FEEC37",
  success: "#C2FFC7",
  error: "#FF748B",
  info: "white",
};
const Notification: React.FC<Props> = ({ type = "success", text }) => {
  const notificationColor = colors[type];
  console.log(colord(notificationColor).darken(0.1).toHex());
  return (
    <section
      className="notification"
      style={{
        backgroundColor: notificationColor,
        borderColor: colord(notificationColor).darken(0.3).toHex(),
      }}>
      {text}
    </section>
  );
};

export default Notification;
