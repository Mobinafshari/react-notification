import useNotification from "./hooks/useNotification";

function App() {
  const {Toasts , trigger} = useNotification({});
  return (
    <div style={{ color: "black"  , display : "flex" , flexDirection : "column" , gap : "10px" , width : "100px" , justifyContent : "center"}}>
      {Toasts}
      <button onClick={() => trigger("hello", "success")}>Show toast</button>
      <button onClick={() => trigger("hello", "warn")}>Show toast</button>
      <button onClick={() => trigger("hello", "error")}>Show toast</button>
      <button onClick={() => trigger("hello", "info")}>Show toast</button>
      {/* <button onClick={triggerToast}>Show toast</button> */}
      {/* <button onClick={triggerToast}>Show toast</button> */}

    </div>
  );
}

export default App;
