import useNotification from "./hooks/useNotification";

function App() {
  const {Toasts , trigger} = useNotification({});
  return (
    <div style={{ color: "black" }}>
      <Toasts /> 
      <button onClick={() => trigger("hello", "success")}>Show toast</button>
      {/* <button onClick={triggerToast}>Show toast</button> */}
      {/* <button onClick={triggerToast}>Show toast</button> */}

    </div>
  );
}

export default App;
