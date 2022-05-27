import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const TerminalsApiClient = {
  getTerminals: async () => {
    const { data } = await axios.get('./sample-data.json', { // REPLACE WITH FAKE SERVER
      headers: HEADERS,
    });
    console.log('da', data);
    return data;
  },
};

export default TerminalsApiClient;