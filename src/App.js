import './App.css';
import HomeProvider from './context/home.context';
import { Home } from './pages';

export const App = () => {
  return (
    <div className="App">
      <HomeProvider>
        <Home />
      </HomeProvider>
    </div>
  );
};
