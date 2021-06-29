import React from 'react';
import { CommandBar, IButtonProps, ICommandBarItemProps } from 'office-ui-fabric-react';
// import { Container } from './styles';
const overflowProps: IButtonProps = { ariaLabel: 'More commands' };

const _items: ICommandBarItemProps[] = [
  {
    key: 'newItem',
    text: 'Novo chamado',
    cacheKey: 'myCacheKey', // changing this key will invalidate this item's cache
    iconProps: { iconName: 'Add' },
  },
  // {
  //   key: 'historyCalls',
  //   text: 'Histórico de chamados',
  //   cacheKey: 'myHistoryKey', // changing this key will invalidate this item's cache
  //   iconProps: { iconName: 'AwayStatusIcon' },
  // },
];

const _overflowItems: ICommandBarItemProps[] = [
  { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
  { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
  { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: 'info',
    text: 'wiki',
    // This needs an ariaLabel since it's icon-only
    ariaLabel: 'wiki',
    iconOnly: true,
    iconProps: { iconName: 'Info' },
    onClick: () => console.log('Info'),
  },
];


const OptionsBar: React.FC = () => {
  return (

    <div>
       <CommandBar
        items={_items}
        overflowItems={_overflowItems}
        overflowButtonProps={overflowProps}
        farItems={_farItems}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
    </div>

  );
}

export default OptionsBar;