import "./styles/notification.scss";

type Props = {
    text : string
    type : "warn" | "error" | "success" | "info"
}
const useNotification : React.FC<Props> = ({type = "success" , text}) => {
    return <section className="notification">{text}</section>;
}

export default useNotification