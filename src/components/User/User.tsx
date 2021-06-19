import * as React from 'react';
import styles from './User.module.scss';
import { useEffect, useState } from 'react';
import { Label, Spinner, SpinnerSize } from 'office-ui-fabric-react';
import { sp } from "@pnp/sp";
import "@pnp/sp/profiles";

const User: React.FC = () => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [loading, setLoading] = useState(true);

  const retriveDataUser = async () => {

    const profile = await sp.profiles.myProperties.get();
    setUserName(profile.DisplayName)
    setUserEmail(profile.Email)
    setUserPicture(profile.PictureUrl)
    setLoading(false)
    //console.log(profile)
  }

  useEffect(() => {
    retriveDataUser()
  }, [])


  if (loading) {
    return  <Spinner size={SpinnerSize.medium} />;
  }


  return (
    <div className={styles.userContainer}>
        
        <Label>
          {userName}
        </Label>

        <img
          className={styles.userPicture} 
          src={userPicture} 
          alt="userPicture"
        />

    </div>
  );
}

export default User;