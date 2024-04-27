import WeatherApp from './components/Weatherapp';
import bg_img from './components/Assets/Background.jpg';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg_img})` }}>
      <WeatherApp/>
    </div>
  );
}

export default App;
