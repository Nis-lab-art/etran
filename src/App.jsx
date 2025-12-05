import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-dvh w-dvw bg-background-2">
      <div className="flex size-full min-w-content top-0 right-auto bottom-auto left-10 flex-col items-center">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
