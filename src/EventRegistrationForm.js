import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validate';

const EventRegistrationForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(submit, validate);
  const [isGuest, setIsGuest] = useState(false);

  function submit() {
    // This function is called when form is successfully validated
    alert(`Form Submitted Successfully: ${JSON.stringify(values, null, 2)}`);
  }

  const handleGuestChange = (e) => {
    handleChange(e);
    setIsGuest(e.target.value === 'yes');
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={values.name || ''}
          onChange={handleChange}
          required
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email || ''}
          onChange={handleChange}
          required
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={values.age || ''}
          onChange={handleChange}
          required
        />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <div>
        <label>Are you attending with a guest?</label>
        <select name="isGuest" value={values.isGuest || 'no'} onChange={handleGuestChange}>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      {isGuest && (
        <div>
          <label>Guest Name:</label>
          <input
            type="text"
            name="guestName"
            value={values.guestName || ''}
            onChange={handleChange}
            required={isGuest}
          />
          {errors.guestName && <p>{errors.guestName}</p>}
        </div>
      )}
      <button type="submit">Register</button>
    </form>
  );
};

export default EventRegistrationForm;
