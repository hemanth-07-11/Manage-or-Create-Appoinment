import ContactPicker from '../contactPicker/ContactPicker'

const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('en-US')
      .split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleContactChange = ({ target }) => {
    setContact(target.value);
  };

  const handleDateChange = ({ target }) => {
    setDate(target.value);
  };

  const handleTimeChange = ({ target }) => {
    setTime(target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
        style={{ width: '50%' }}
        required
      />
      <input
        type="date"
        min={getTodayString()}
        value={date}
        onChange={handleDateChange}
        style={{ width: '50%' }}
        required
      />
      <input
        type="time"
        value={time}
        onChange={handleTimeChange}
        style={{ width: '50%' }}
        required
      />
    <ContactPicker handleContactChange={handleContactChange} contacts={contacts} />
      <input
        type="submit"
        value="Add"
        style={{ width: '12.5%', cursor: 'pointer' }}
      />
    </form>
  );
};

export default AppointmentForm;
