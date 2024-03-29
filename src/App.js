import {useState} from 'react'
import logo from './Logo.jpg'
import './App.css';

function App () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
  });
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      formErrors.email = 'Invalid email address';
    }

    if (!formData.date.trim()) {
      formErrors.date = 'Date is required';
    }

    if (!formData.time.trim()) {
      formErrors.time = 'Time is required';
    }

    if (!formData.guests.trim()) {
      formErrors.guests = 'Number of guests is required';
    } else if (!/^\d+$/.test(formData.guests)) {
      formErrors.guests = 'Please enter a valid number';
    }

    if (Object.keys(formErrors).length === 0) {
      console.log('Form data:', formData);
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '',
      });
      setReservationSuccess(true);
      setTimeout(() => {
        setReservationSuccess(false);
      }, 3000);
    } else {
      setErrors(formErrors);
    }
  };

  return (
  <div className='App'>
    <img src={logo} alt='logo' className='logo' />
    <h1>
      Reservation Table
    </h1>
    <form className="reservation-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <span className="error">{errors.name}</span>}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      {errors.date && <span className="error">{errors.date}</span>}
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      {errors.time && <span className="error">{errors.time}</span>}
      <input
        type="number"
        name="guests"
        placeholder="Number of guests"
        value={formData.guests}
        onChange={handleChange}
      />
      {errors.guests && <span className="error">{errors.guests}</span>}
      <button type="submit">Reserve Table</button>
    </form>
    {reservationSuccess && (
        <p className="success-message">Your reservation is successful!</p>
      )}
 </div>
  );
};


export default App;

