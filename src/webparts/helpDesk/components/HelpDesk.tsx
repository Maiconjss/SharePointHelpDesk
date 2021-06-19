import * as React from 'react';
import styles from './HelpDesk.module.scss';
import { IHelpDeskProps } from './IHelpDeskProps';
import NavBar from '../../../components/NavBar/NavBar';
import './styles.css';

export default class HelpDesk extends React.Component<IHelpDeskProps, {}> {
  public render(): React.ReactElement<IHelpDeskProps> {
    return (
      <div>
        <NavBar/>
      </div>
    );
  }
}
