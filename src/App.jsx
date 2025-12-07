import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative min-h-dvh w-dvw bg-background-2">
      <Header />
      {/* Right side scrollable content, shifted by sidebar width */}
      <main className="ml-[520px]">
        <Content />
      </main>
    </div>
  );
}

export default App;
