import React from 'react';
import { Intl } from 'redux-intl';
import { Button, Dropdown, Menu } from '@hero-design/react';

import { MODAL_NAMES } from './constants';
import { TRACK_PREVIEW_DOCUMENT } from '../../HrDocumentsTab/tracks';

const ActionDropdown = ({
  additionalPropsForCustomComponents: {
    updatingSelectContract,
    selectContract,
    selectedContractId,
    track,
  },

  openModal,
  rowData,
  setCustomData,
  value,
}: any) => {
  const [open, setOpen] = React.useState(false);
  const toggleDropdown = () => setOpen(!open);
  const closeDropdown = () => setOpen(false);
  const dropdownTarget = (
    <Button
      variant="text"
      rightIcon="carat-down-small"
      text={Intl.formatMessage({ id: 'actions' })}
      onClick={toggleDropdown}
      style={{ padding: 0, width: 90 }}
    />
  );
  const dropdownContent = (
    <Menu>
      <Menu.Item
        icon="eye-outlined"
        text={Intl.formatMessage({ id: 'preview' })}
        onClick={() => {
          openModal(MODAL_NAMES.PREVIEW_TEMPLATE);
          setCustomData(rowData);
          closeDropdown();
          track(TRACK_PREVIEW_DOCUMENT);
        }}
      />
      <Menu.Item
        icon="enter-arrow"
        text={Intl.formatMessage({ id: 'select' })}
        disabled={updatingSelectContract || !!selectedContractId}
        onClick={() => {
          selectContract(value);
          closeDropdown();
        }}
      />
    </Menu>
  );

  return (
    <Dropdown
      open={open}
      target={dropdownTarget}
      content={dropdownContent}
      onClose={closeDropdown}
    />
  );
};

export default ActionDropdown;
