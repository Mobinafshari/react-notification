import useNotification from "./hooks/useNotification";

function App() {
  const Toast = useNotification({ text: "Adding user success." });
  return (
    <div>
      <Toast /> <button>Show toast</button>
    </div>
  );
}

export default App;
