import Header from "./comoonents/Header";
import Menu from "./comoonents/Menu";
import Footer from "./comoonents/Footer";

function App() {
  const startHour = 12;
  const endHour = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= startHour && hour <= endHour;

  return (
    <div className="App">
      <Header />
      <Menu isOpen={isOpen} />
      <Footer startHour={startHour} endHour={endHour} isOpen={isOpen} />
    </div>
  );
}

export default App;
