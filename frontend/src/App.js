import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './HOC/Layout';
import Auth from './containers/Auth';
import MovieList from './containers/MovieList';
import MovieDetail from './containers/MovieDetail';
import { useSelector } from 'react-redux';
import React from 'react';

function App() {

  const darkMode = useSelector((state) => state.ui.darkMode)
  const {username, token} = useSelector(state => state.auth)
  const routes = React.useMemo(() =>{
    if (token){
      return (
        <Routes>
          <Route path='/home' element={<MovieList />}/>
          <Route path='/movies/:id' element={<MovieDetail />}/>
          <Route path='/*' element={<Navigate to='/home'/>}/>
        </Routes>
      )
    } else {
      return (
        <Routes>
            <Route path='/login' element={<Auth type="login"/>}/>
            <Route path='/register' element={<Auth type="register"/>}/>
            <Route path='/*' element={<Navigate to='/login'/>}/>
        </Routes>
      )
    }
  }, [token])

  console.log(username, token);
  const className = darkMode ? 'dark' : ''


  return (
    <div className={className}>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default App;



