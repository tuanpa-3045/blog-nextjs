import axios from 'axios';

export async function addContact(data) {
  const response = await axios.post('/api/contact', data);
}
