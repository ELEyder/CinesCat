import React, { useState } from 'react';
import styles from './AddCinema.module.css';
import { Modal } from 'antd';
import { apiClient } from '../../client/apiClient';

function AddCinema({ open, onCancel, reload }) {
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addCinema = async (e) => {
    e.preventDefault(); // Ahora funciona correctamente porque el evento proviene del formulario

    try {
      const result = await apiClient.post('cinemas/create', formData);
      console.log(result);
      reload();
      onCancel();
    } catch (error) {
      console.error(error);
      setError('Error adding cinema.');
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={() => document.getElementById('cinemaForm').requestSubmit()} // Dispara el submit del formulario
      title="Add Cinema"
      okText="Add"
      cancelText="Cancel"
    >
      <form id="cinemaForm" className={styles.form} onSubmit={addCinema}>
        <input
          className={styles.input}
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          name="address"
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          name="city"
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          name="phone"
          type="number"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </Modal>
  );
}

export default AddCinema;
