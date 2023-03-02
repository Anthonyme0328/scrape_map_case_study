import './App.css';
import ChartOne from './components/ChartOne';
import ChartTwo from './components/ChartTwo';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <Table />
      

      <ChartOne />
      <ChartTwo />
    </div>
  );
}

export default App;
