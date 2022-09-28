import { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from './components/MapComponent';
import Data from './components/Data';
import Search from './components/Search';

function App() {
  const [search, setSearch] = useState('');
  const [ipData, setIpData] = useState({});
  const [firstLocation, setFirstLocation] = useState({});
  const [location, setLocation] = useState(false);

  useEffect(() => {
    const getFirstLocation = async () => {
      const response = await axios.get('https://ipapi.co/8.8.8.8/json/');
      setFirstLocation(response.data);
    };
    getFirstLocation();
  }, []);

  const getIpData = async () => {
    const response = await axios.get(`https://ipapi.co/${search}/json/`);
    setIpData(response.data);
    setLocation(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getIpData();
  };

  return (
    <>
      <Search
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
        getIpData={getIpData}
      />
      <Data data={ipData} location={location} firstLocation={firstLocation} />
      <MapComponent
        data={ipData}
        location={location}
        firstLocation={firstLocation}
      />
    </>
  );
}

export default App;
