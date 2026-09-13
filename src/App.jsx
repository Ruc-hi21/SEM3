import { useDispatch, useSelector } from 'react-redux'
import { fetchlocation } from './redux/issSlice'
import './App.css'

function App() {
  const disptach = useDispatch()
  const satelite = useSelector(state => state.satelite);

 const angle = satelite.response
  ? (((parseFloat(satelite.response.longitude) + 180) / 360) * 360 * 7) % 360
  : 0;
  return (
    <div className="app">
      <h1>ISS Live Tracker</h1>

      <button onClick={() => disptach(fetchlocation())} disabled={satelite.status === 'Loading'}>
        {satelite.status === 'Loading' ? 'Locating...' : 'Fetch Satellite Location'}
      </button>

      <div className="earth-wrap">
        <div className="earth"></div>
        <div className="orbit">
          {satelite.response && (
            <div
              className="satellite"
              style={{ transform: `rotate(${angle}deg) translateX(100px) rotate(-${angle}deg)` }}
            ></div>
          )}
        </div>
      </div>

      <p className="status-text">{satelite.status}</p>

      {satelite.response && (
        <p className="coords">
          Lat: {satelite.response.latitude} | Long: {satelite.response.longitude}
        </p>
      )}
    </div>
  )
}

export default App