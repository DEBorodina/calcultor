import { Component } from 'react';
import { Action, AnyAction, Dispatch } from 'redux';
import { ConnectedProps, connect } from 'react-redux';

import { Container } from './styles';
import ClassDisplay from '@/components/Display/ClassDisplay';
import ClassKeypad from '@/components/Keypad/FunctionalKeypad';
import { validateEquation } from '@/utils/validator';
import { addToClassHistory } from '@/store/actions/historyActionCreators';
import { MAX_LENGHT, getErrorMessage } from './FunctionalCalculator';
import { getResult } from '@/utils/solver';

interface ClassCalculatorState {
  result: string;
  equation: string;
}

class ClassCalculator extends Component<
  ClassCalculatorProps,
  ClassCalculatorState
> {
  constructor(props: ClassCalculatorProps) {
    super(props);

    this.state = {
      result: '',
      equation: '',
    };
  }

  handleKeyPress = (key: string): void => {
    if (this.state.result) {
      this.setState({ equation: '' });
      this.setState({ result: '' });
    }
    if ((this.state.equation + key).length <= MAX_LENGHT)
      this.setState(({ equation }) => ({
        equation: equation + key,
      }));
  };

  handleEqualPress = (): void => {
    if (this.state.equation != '') {
      try {
        validateEquation(this.state.equation);
        const resValue: string = getResult(this.state.equation);
        this.setState({ result: '=' + resValue });
        this.props.addToClassHistory(this.state.equation + '=' + resValue);
      } catch (e) {
        this.setState({ result: getErrorMessage(e) });
      }
    }
  };

  handleCPress = (): void => {
    if (!this.state.result && this.state.equation.length > 0) {
      this.setState({
        equation: this.state.equation.slice(0, this.state.equation.length - 1),
      });
    } else {
      this.setState({ result: '' });
    }
  };

  handleCEPress = (): void => {
    this.setState({ result: '', equation: '' });
  };

  render() {
    return (
      <Container>
        <ClassDisplay
          equation={this.state.equation}
          result={this.state.result}
        ></ClassDisplay>
        <ClassKeypad
          handleCEPress={this.handleCEPress}
          handleKeyPress={this.handleKeyPress}
          handleEqualPress={this.handleEqualPress}
          handleCPress={this.handleCPress}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  addToClassHistory: (history: string) =>
    dispatch<AnyAction>(addToClassHistory(history)),
});

const connector = connect(null, mapDispatchToProps);

type ClassCalculatorProps = ConnectedProps<typeof connector>;

export default connector(ClassCalculator);
