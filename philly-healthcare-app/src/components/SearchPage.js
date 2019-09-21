import React from 'react';

const Hospitals = ({ hospital }) => {
  return (
    <div className="hospital-data">
      <h2>{hospital.provider_name}</h2>
      <p>{hospital.provider_street_address}</p>
      <p>
        {hospital.provider_city}, {hospital.provider_state},
        {hospital.provider_zip_code}
      </p>
    </div>
  );
};

export default Hospitals;
