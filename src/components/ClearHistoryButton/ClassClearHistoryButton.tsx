import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { clearAllHistory } from '@/store/actions/historyActionCreators';
import { SettingsButton } from '@/styles/common';

class ClassHistoryButton extends Component<ClassHistoryButtonProps> {
  constructor(props: ClassHistoryButtonProps) {
    super(props);
  }

  handleClick = (): void => {
    this.props.clearAllHistory();
  };

  render() {
    return (
      <SettingsButton onClick={this.handleClick}>
        Clear all history
      </SettingsButton>
    );
  }
}

const mapDispatchToProps = {
  clearAllHistory,
};

const connector = connect(null, mapDispatchToProps);

type ClassHistoryButtonProps = ConnectedProps<typeof connector>;

export default connector(ClassHistoryButton);
