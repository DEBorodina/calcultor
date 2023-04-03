import { Component } from 'react';

import {
  HistoryList,
  HistoryListItem,
  HistoryWithScroll,
  ShowButton,
  Text,
} from './styles';
import { GlobalStore } from '@/store/reducers';
import { ConnectedProps, connect } from 'react-redux';

export interface ClassHistoryState {
  isOpen: boolean;
}

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
        <ShowButton onClick={this.handleIsOpen}>History</ShowButton>
        {this.state.isOpen &&
          (history.length > 0 ? (
            <HistoryList>
              {this.props.history.map((item, index) => (
                <HistoryListItem key={index}>{item}</HistoryListItem>
              ))}
            </HistoryList>
          ) : (
            <Text>No history yet</Text>
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
