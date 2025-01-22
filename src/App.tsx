import useNotification from "react-notification-npm";

function App() {
  const { Toasts, trigger } = useNotification(10000);
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100px",
        justifyContent: "center",
      }}>
      {Toasts}
      <button onClick={() => trigger("hello" , "error")}>Show toast</button>
      {/* <button onClick={() => trigger("hello", "warn")}>Show toast</button> */}
      {/* <button onClick={() => trigger("hello", "error")}>Show toast</button> */}
      {/* <button onClick={() => trigger("hello", "info")}>Show toast</button> */}
    </div>
  );
}

export default App;
