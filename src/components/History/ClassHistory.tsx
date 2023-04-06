import { Component } from 'react';
import {
  HistoryList,
  HistoryListItem,
  HistoryWithScroll,
  ShowButton,
  Text,
} from './styles';
import { ConnectedProps, connect } from 'react-redux';
import { ClassHistoryState } from './types';
import { GlobalStore } from '@/store/reducers/types';

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
    return (
      <HistoryWithScroll>
        <ShowButton onClick={this.handleIsOpen} data-cy="history-button">
          History
        </ShowButton>
        {this.state.isOpen &&
          (this.props.history.length > 0 ? (
            <HistoryList data-cy="history-list">
              {this.props.history.map((item, index) => (
                <HistoryListItem key={index}>{item}</HistoryListItem>
              ))}
            </HistoryList>
          ) : (
            <Text data-cy="no-history">No history yet</Text>
          ))}
      </HistoryWithScroll>
    );
  }
}

const mapStateToProps = (state: GlobalStore) => ({
  history: state.history.classHistory,
});

const connector = connect(mapStateToProps);

type ClassHistoryProps = ConnectedProps<typeof connector>;

export default connector(ClassHistory);
