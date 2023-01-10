
import './App.css';
import Controller from './components/Controller';
import Header from './components/Header';
import TrackList from './components/TrackList';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';

function App() {
  return (
    <MusicPlayerProvider>
      <div className='container'>
        <Header />
        <TrackList />
        <Controller />
      
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
