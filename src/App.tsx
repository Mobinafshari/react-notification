import Button from "react-notification-npm"
function App() {
  // const { Toasts, trigger } = useNotification();
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
      {/* {Toasts} */}
      <Button>hey</Button>
      <button >Show toast</button>
      {/* <button onClick={() => trigger("hello", "warn")}>Show toast</button> */}
      {/* <button onClick={() => trigger("hello", "error")}>Show toast</button> */}
      {/* <button onClick={() => trigger("hello", "info")}>Show toast</button> */}
    </div>
  );
}

export default App;
