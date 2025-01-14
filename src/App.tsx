import useNotification from "./hooks/useNotification";

function App() {
  const Toast = useNotification({
    text: "Adding user success.",
    type: "success",
  });
  return (
    <div style={{ color: "white" }}>
      <Toast /> <button>Show toast</button>
    </div>
  );
}

export default App;
