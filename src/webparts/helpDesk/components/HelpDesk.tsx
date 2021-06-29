import * as React from 'react';
import styles from './HelpDesk.module.scss';
import { IHelpDeskProps } from './IHelpDeskProps';
import NavBar from '../../../components/NavBar/NavBar';
import './styles.css';
import Divisor from '../../../components/Divisor/Divisor';
import OptionsBar from '../../../components/OptionsBar/OptionsBar';
import BoardStatus from '../../../components/BoardStatus/BoardStatus';

const HelpDesk: React.FC<IHelpDeskProps> = ()=> {

    return (
      <div>
        <NavBar/>
        <Divisor />
        <OptionsBar />
        <BoardStatus />
      </div>
    );
  
}

export default HelpDesk;
