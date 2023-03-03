import './App.css';
import CaliMap from './components/CaliMap';
import ChartOne from './components/ChartOne';
import ChartTwo from './components/ChartTwo';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      <CaliMap />
      <ChartOne />
      <ChartTwo />
    </div>
  );
}

export default App;
