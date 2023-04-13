import { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import ClassDisplay from '@/components/Display/ClassDisplay';
import ClassKeypad from '@/components/Keypad/FunctionalKeypad';
import { addToClassHistory } from '@/store/actions/historyActionCreators';
import { getErrorMessage } from '@/utils/errorsHelper';
import { intermediateFormater } from '@/utils/formater';
import { getResult } from '@/utils/solver';
import { finalValidator, intermediateValidator } from '@/utils/validator';

import { MAX_LENGTH } from './FunctionalCalculator';
import { Container } from './styles';

interface ClassCalculatorState {
  result: string;
  equation: string;
  errors: string;
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
      errors: '',
    };
  }

  handleKeyPress = (key: string): void => {
    let newEquation: string;

    if (this.state.errors) {
      newEquation = this.state.equation + key;
      if (intermediateValidator(newEquation)) this.setState({ errors: '' });
    } else if (this.state.result) {
      newEquation = this.state.result + key;
      if (intermediateValidator(newEquation)) this.setState({ result: '' });
    } else {
      newEquation = this.state.equation + key;
    }

    if (newEquation.length <= MAX_LENGTH && intermediateValidator(newEquation))
      this.setState({ equation: intermediateFormater(newEquation) });
  };

  handleEqualPress = (): void => {
    if (this.state.equation != '') {
      try {
        finalValidator(this.state.equation);

        const resultValue: string = getResult(this.state.equation);
        this.setState({ result: resultValue });

        this.props.addToClassHistory(this.state.equation + '=' + resultValue);
      } catch (e) {
        this.setState({ errors: getErrorMessage(e) });
      }
    }
  };

  handleCPress = (): void => {
    this.setState({ errors: '' });
    if (
      !this.state.errors &&
      !this.state.result &&
      this.state.equation.length > 0
    ) {
      this.setState({
        equation: this.state.equation.slice(0, this.state.equation.length - 1),
      });
    } else {
      this.setState({ result: '' });
    }
  };

  handleCEPress = (): void => {
    this.setState({ result: '', equation: '', errors: '' });
  };

  render() {
    return (
      <Container>
        <ClassDisplay
          equation={this.state.equation}
          result={this.state.result}
          errors={this.state.errors}
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

const mapDispatchToProps = {
  addToClassHistory,
};

const connector = connect(null, mapDispatchToProps);

type ClassCalculatorProps = ConnectedProps<typeof connector>;

export default connector(ClassCalculator);
