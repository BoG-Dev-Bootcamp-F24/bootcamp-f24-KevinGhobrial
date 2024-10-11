import React, { useEffect, useState } from 'react';
import { fetchStationData, fetchTrainData } from '../api'; // Adjust path if necessary
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import './LinesPage.css';

const LinesPage = () => {
  const [stations, setStations] = useState([]);
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const stationResponse = await fetchStationData();
        const trainResponse = await fetchTrainData();
        
        setStations(stationResponse.data);
        setTrains(trainResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div>Loading trains...</div>;
  }

  // Remove duplicates from train data
  const uniqueTrains = Array.from(new Set(trains.map(train => JSON.stringify(train))))
    .map(train => JSON.parse(train));

  return (
    <div className="container">
      <div className="navbar">
        <Navbar stations={stations} />
      </div>
      <div className="main-content">
        <h2>Available Trains:</h2>

      
        <div className="button-group">
          <button className="btn">Arriving</button>
          <button className="btn">Scheduled</button>
          <button className="btn">Northbound</button>
          <button className="btn">Southbound</button>
          <button className="btn">Eastbound</button>
          <button className="btn">Westbound</button>
        </div>

       
        <div className="train-list">
          {uniqueTrains.length > 0 ? (
            uniqueTrains.map(train => (
              <div key={train._id} className="train-item">
                {train.LINE} to {train.DESTINATION} 
              </div>
            ))
          ) : (
            <div>No trains available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinesPage;
