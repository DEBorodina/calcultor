import { Component, Dispatch } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AnyAction } from 'redux';

import { theme, themes } from '@/constants/themes';
import { changeTheme } from '@/store/actions/themeActionCreators';
import { GlobalStore } from '@/store/types';

import ClassDropDown from '../DropDown/ClassDropDown';
import { Option } from '../DropDown/types';

class ClassThemeMenu extends Component<ClassThemeMenuProps> {
  constructor(props: ClassThemeMenuProps) {
    super(props);
  }

  handleSetTheme = (option: string) => {
    this.props.changeTheme(option as theme);
  };

  render() {
    const themesNames: Option[] = Object.keys(themes).map((theme) => ({
      option: theme,
      isActive: theme === this.props.currentTheme,
    }));
    return (
      <ClassDropDown
        options={themesNames}
        label={'Choose theme'}
        handleChooseOption={this.handleSetTheme}
      ></ClassDropDown>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  changeTheme: (theme: theme) => dispatch(changeTheme(theme)),
});

const mapStateToProps = (state: GlobalStore) => ({
  currentTheme: state.theme.theme,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type ClassThemeMenuProps = ConnectedProps<typeof connector>;

export default connector(ClassThemeMenu);
