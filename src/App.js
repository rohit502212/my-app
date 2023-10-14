import React, { useEffect } from 'react'
import './App.css';
import Header from './Components/Header/Header';
import DashBoard from './Components/DashBoard/Dashboard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Actions/DataActions';
import Loading from './Components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{ paddingTop: "10px" }} >
      <Header />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  ) : <Loading />
}

export default App