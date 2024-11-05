
import React from 'react';
import AuthService from '../services/authService';
import { useState } from 'react';






const HomePage = () => {
  
  const [userDetails, setUserDetails] = useState(null);

  React.useEffect(() => {
    

    AuthService.getUserdetails().then((response) => {
      setUserDetails(response);
    });
  }, []);

  
  console.log("userDetails", userDetails);

  return (
    <div>
      <h1>Welcome {userDetails ? userDetails.username : 'Guest'}</h1>
      
    </div>
  );
};

export default HomePage;
