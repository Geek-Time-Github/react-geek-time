import React from "react";

const enStrings = {
  submit: "Submit",
  cancel: "Cancel"
};

const cnStrings = {
  submit: "提交",
  cancel: "取消"
};

const LocaleContext = React.createContext(enStrings);

// 祖先组件
class LocaleProvider extends React.Component {
  state = { locale: cnStrings };
  toggleLocale = () => {
    const locale =
      this.state.locale === enStrings
        ? cnStrings
        : enStrings;
    console.log('locale', locale)    
    this.setState({ locale });
  };
  render() {
    return (
      <LocaleContext.Provider value={this.state.locale}>
        <button onClick={this.toggleLocale}>
          切换语言
        </button>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

// 子孙组件
class LocaledButtons extends React.Component {
  render() {
    return (
      <LocaleContext.Consumer>
        {locale => (
          <div>
            <button>{locale.cancel}</button>
            &nbsp;<button>{locale.submit}</button>
          </div>
        )}
      </LocaleContext.Consumer>
    );
  }
}

export default () => (
  <div>
    <LocaleProvider>
      <div>
        <br /><br /><br />
        <LocaledButtons />
        <br /><br /><br />
      </div>
    </LocaleProvider>
    <LocaledButtons />
  </div>
);

// LocaleContext的作用：方便祖先组件与后代组件（中间隔了好多层组件）传值