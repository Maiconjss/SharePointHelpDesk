import * as React from 'react';
import { Toggle } from 'office-ui-fabric-react';

const DarkMode: React.FC = () => {

  return(
    <div>
        <Toggle label="Modo escuro" onText="On" offText="Off" />
    </div>      
);
}

export default DarkMode;