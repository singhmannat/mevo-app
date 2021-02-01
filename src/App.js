import React, {useState, useEffect} from "react";
import ReactMapGL, {Marker} from "react-map-gl";
import './App.css';

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [viewPort , setViewPort] = useState({
    latitude:-41.294030,
    longitude: 174.778320,
    width: "100vw",
    height: "100vh",
    zoom: 13
  });

  useEffect(() => {
    fetch("https://api.mevo.co.nz/public/vehicles/all")
      .then(res => res.json())
      .then(
        (result) => {
          setVehicles(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [viewPort])

  return (
    <div className="App">
        <ReactMapGL
          {...viewPort}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange= {(viewPort) =>  {
            setViewPort(viewPort);
          }}>
          {
            vehicles.map(item => {
              return(
                <Marker 
                    key={item.position.latitude} 
                    latitude={parseFloat(item.position.latitude)}
                    longitude={parseFloat(item.position.longitude)}>
                    <img className="pin-logo" src={item.iconUrl} alt="Vehicle Icon">
                    </img>
                </Marker>
              );
          })
      }
        </ReactMapGL>
    </div>
  );
}

export default App;
