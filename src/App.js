import './App.css';
import MainLayout from "./pages/MainLayout/MainLayout";
import Searcher from "./components/searcher/Searcher";


function App() {


  return (
      <div className={`app ${'' ? 'dark-theme' : ''}`}>
         <MainLayout>
            <Searcher/>
        </MainLayout>
      </div>
  );
}

export default App;
