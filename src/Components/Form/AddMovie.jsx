import React, { useState } from 'react';
import styles from './AddMovie.module.css';
import { Modal } from 'antd'
import { apiClient, apiClientFiles } from '../../client/apiClient';

function AddMovie ({ open, onCancel, reload}) {
    const [error, setError] = useState(null)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        genre: '',
        image: null,
      });

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
          setFormData((prev) => ({
            ...prev,
            image: files[0],
          }));
        } else {
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        }
      };
  const addMovie = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      setError('Por favor, seleccione una imagen.');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('genre', formData.genre);
    data.append('image', formData.image);

    try {
      data.forEach((value, key) => {
        console.log(`${key}:`, value);
      });
      const result = await apiClientFiles.post('movies/create', data);
      console.log(result);
      reload()
      onCancel();
    } catch (error) {
      console.error(error);
      setError('Error to add movie.');
    }
  };
  
    return (

          <Modal open={open} onCancel={onCancel} onOk={addMovie} title={'Add movie'} okText={'Add'} cancelText="Cancelar">
            <form className={styles.form}>
                <input className={styles.input} name="title" type="text" placeholder="Title" onChange={handleChange}/>
                <input className={styles.input} name="description" type="text" placeholder="Description" onChange={handleChange}/>
                <input className={styles.input} name="genre" type="text" placeholder="Genre" onChange={handleChange}/>
                <label className={styles.img}>
                  Sube el archivo
                  <input
                    className={styles.input}
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </label>
            </form>
            </Modal>
    );
  };

export default AddMovie