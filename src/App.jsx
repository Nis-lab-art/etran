import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-dvh w-dvw bg-background-2">
      <Header />
      <main className="ml-[520px]">
        <Content />
        <Footer />
      </main>
    </div>
  );
}

export default App;
