import Content from "./components/Content";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="h-dvh w-dvw bg-background-2">
      <div className="flex size-full flex-col items-center">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
