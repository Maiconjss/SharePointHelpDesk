import * as React from 'react';
import styles from './HelpDesk.module.scss';
import { IHelpDeskProps } from './IHelpDeskProps';
import NavBar from '../../../components/NavBar/NavBar';
import './styles.css';
import Divisor from '../../../components/Divisor/Divisor';
import DarkMode from '../../../components/DarkMode/DarkMode';

const HelpDesk: React.FC<IHelpDeskProps> = ()=> {
    return (
      <div>
        <NavBar/>
        <Divisor />
      </div>
    );
  
}

export default HelpDesk;
