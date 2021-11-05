import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
  const cart = 4;
  return (
    <div className="App">
      <Navbar cartNumber={cart}/>
      <Body />
    </div>
  );
}

export default App;
