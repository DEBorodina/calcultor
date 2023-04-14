import { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '@/store/reducers';

import {
  HistoryList,
  HistoryListItem,
  HistoryWithScroll,
  ShowButton,
  Text,
} from './styles';
import { ClassHistoryState } from './types';

class ClassHistory extends Component<ClassHistoryProps, ClassHistoryState> {
  constructor(props: ClassHistoryProps) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleIsOpen = (): void => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { history } = this.props;
    const { isOpen } = this.state;

    return (
      <HistoryWithScroll>
        <ShowButton onClick={this.handleIsOpen} data-cy="history-button">
          History
        </ShowButton>
        {isOpen &&
          (history.length > 0 ? (
            <HistoryList data-cy="history-list">
              {history.map((item, index) => (
                <HistoryListItem key={`history-list-item__${index}`}>
                  {item}
                </HistoryListItem>
              ))}
            </HistoryList>
          ) : (
            <Text data-cy="no-history">No history yet</Text>
          ))}
      </HistoryWithScroll>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  history: state.history.classHistory,
});

const connector = connect(mapStateToProps);

type ClassHistoryProps = ConnectedProps<typeof connector>;

export default connector(ClassHistory);
