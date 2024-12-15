import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import styles from './Home.module.css';
import { fetchData } from "../../api/api";
function Home () {
    const [data, setData] = useState([]);
    const [dataCinemas, setDataCinema] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reload, setReload] = useState(false);

    useEffect(() => {
      document.title = "Home";
      const getData = async () => {
        try {
          const result = await fetchData('movies');
          const resultCinemas = await fetchData('cinemas');
          setData(result);
          setDataCinema(resultCinemas);
          setLoading(false);
        } catch (error) {
          setError('Error fetching data');
          setLoading(false);
        }
      };
  
      getData();
      const timer = setTimeout(() => {
        getData();
      }, 1000);
  

      return () => clearTimeout(timer);
    }, [reload]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <>
      <div className={styles.content}>
        <h1 className={styles.subtitle}>Last Movies</h1>
        <div className={styles.movies}>
          {data.map(item => (
            <Card key={item.id} id={item.id} title={item.title} description={item.description} genre={item.genre} imageUrl={item.imageUrl}/>
          ))}
        </div>
        <h1 className={styles.subtitle}>Last Cinemas</h1>
        <div className={styles.movies}>
          {dataCinemas.map(item => (
            <Card key={item.id} id={item.id} title={item.name} description={item.address} genre={item.phone} imageUrl={'./img/cine.jpg'}/>
          ))}
        </div>
      </div>
      </>
    );
  };

export default Home