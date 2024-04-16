import '../App.css';
import { Header } from '../components';
import HomeProvider from '../context/home.context';
import { Home } from './home/Home';

export const Body = () => {
  return (
    <HomeProvider>
      <div className="fixedHeader">
        <Header />
      </div>
      <div className="App">
        <Home />
      </div>
    </HomeProvider>
  );
};
