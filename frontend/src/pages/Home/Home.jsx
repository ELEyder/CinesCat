import React, { useState, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import Button from '../../Components/Button/Button';
import styles from './Home.module.css';
import AddMovie from '../../Components/Form/AddMovie'
import { fetchData } from "../../api/api";
function Home () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(false);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const result = await fetchData('movies');
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
      <div className={styles.content}>
        <Button text='+ Add Movie' onClick={()=>{
            setOpen(true)
        }}/>
        <h1 className={styles.subtitle}>Movies</h1>
        <div className={styles.movies}>
          {data.map(item => (
            <Card key={item.id} id={item.id} title={item.title} description={item.description} genre={item.genre} imageUrl={item.imageUrl}/>
          ))}
        </div>
          
          <AddMovie open={open} onCancel={()=>setOpen(false)} reload={()=>setReload(!reload)}/>
      </div>
    );
  };

export default Home