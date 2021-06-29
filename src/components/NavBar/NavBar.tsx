import * as React from 'react';
import { Label } from 'office-ui-fabric-react';
import styles from './NavBar.module.scss';
import User from '../User/User';

const NavBar: React.FC = () => {
  return (
    <div className={styles.container}>
    <div className={styles.navContainer}>

      <div className={styles.enterpriseLogo}>
        <Label>SHAREPOINT HELP DESK</Label>
      </div>

      <div className={styles.userInformation}>
        <User />
      </div>

    </div>
    </div>
  );
}

export default NavBar;