import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Hospitals from './SearchPage';

const HOSPITALS_API_URL =
  'https://data.cms.gov/resource/tcsp-6e99.json?provider_state=PA&$limit=5&hospital_referral_region=PA - Philadelphia';

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [url, setUrl] = useState(HOSPITALS_API_URL);
  const [hospitals, setHospitals] = useState([{}]);
  const [query, setQuery] = useState('');

  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then(res => setHospitals(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder={'Enter your Zipcode'}
      />
      <button
        type="button"
        onClick={() => setUrl(url + `&provider_zip_code=${query}`)}
      >
        Search
      </button>
      <span>
        {hasError
          ? 'ERORR'
          : hospitals.map((item, index) => (
              <Hospitals key={index} hospital={item} />
            ))}
      </span>
    </>
  );
};

export default App;
