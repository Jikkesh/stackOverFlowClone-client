
import React, {useState , useEffect } from 'react';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

const UserInformationBox = () => {
  const [userIp, setUserIp] = useState(null);
  const [userBrowser, setUserBrowser] = useState(null);
  const [userBrowserVersion, setUserBrowserVersion] = useState(null);
  const [userOs, setUserOs] = useState(null);
  const [userDevice, setUserDevice] = useState(null);
  const [userCity, setUserCity] = useState(null);

  const users = useSelector((state) => state.usersReducer)
  
  const {id} = useParams();
  const User = users.filter((user) => user._id === id)[0];


  useEffect(() => {
    if (User) {
      setUserIp(User.ipAddress);
      setUserBrowser(User.browserType);
      setUserBrowserVersion(User.browserVersion);
      setUserOs(User.osType);
      setUserDevice(User.deviceType);
      setUserCity(User.city);
    }
  }, [User]);
  

  return (
    <div className="user-info-box">
      <h2>User Information</h2>

      {User ? (
        <div>
          <p><strong>Browser Type:</strong> {userBrowser}</p>
          <p><strong>Browser Version:</strong> {userBrowserVersion}</p>
          <p><strong>Device Type:</strong> {userDevice}</p>
          <p><strong>OS:</strong> {userOs}</p>
          <p><strong>IP Address:</strong> {userIp}</p>
          <p><strong>City:</strong> {userCity}</p>
        </div>

      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default UserInformationBox;
