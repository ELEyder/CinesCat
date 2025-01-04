import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import Button from '../../Components/Button/Button';
import styles from './Cinema.module.css';
import AddCinema from '../../Components/Form/AddCinema'
import { fetchData } from "../../api/api";
import imgCinema from "../../assets/img/cinemas/cinema.jpg"

function Cinema () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
  
    useEffect(() => {
      document.title = "Cines";
      const getData = async () => {
        try {
          const result = await fetchData('cinemas');
          setData(result);
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
        <Button text='Add Cinema' onClick={()=>{
            setOpen(true)
        }}/>
        <h1 className={styles.subtitle}>Last Cinemas</h1>
        <div className={styles.movies}>
          {data.map(item => (
            <Card key={item.id} title={item.name} description={item.address} genre={item.phone} imageUrl={`${imgCinema}?t=${new Date().getTime()}`}/>
          ))}
        </div>
          
          <AddCinema open={open} onCancel={()=>setOpen(false)} reload={()=>setReload(!reload)}/>
      </div>
      </>
    );
  };

export default Cinema