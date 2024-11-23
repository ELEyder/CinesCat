import React, { useState, useEffect } from 'react';
import { postData } from "../../api/api";
import styles from './AddCinema.module.css';
import { Modal } from 'antd'

function AddMovie ({ open, onCancel, reload}) {
    const [error, setError] = useState(null)

    const [formData, setFormData] = useState({
      name: '',
        address: '',
        city: '',
        phone: null,
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        
      };
  const addCinema = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('address', formData.address);
    data.append('city', formData.city);
    data.append('phone', formData.phone);

    try {
      const result = await postData('cinemas/create', data);
      console.log(result);
      reload()
      onCancel();
    } catch (error) {
      console.error(error);
      setError('Error al agregar el cine.');
    }
  };
  
    return (
          <Modal open={open} onCancel={onCancel} onOk={addCinema} title={'Agregar cine'} okText={'Agregar'} cancelText="Cancelar">
            <form className={styles.form}>
                <input className={styles.input} name="name" type="text" placeholder="Name" onChange={handleChange}/>
                <input className={styles.input} name="address" type="text" placeholder="Address" onChange={handleChange}/>
                <input className={styles.input} name="city" type="text" placeholder="City" onChange={handleChange}/>
                <input className={styles.input} name="phone" type="number" placeholder="Phone" onChange={handleChange}/>
            </form>
            </Modal>
    );
  };

export default AddMovie