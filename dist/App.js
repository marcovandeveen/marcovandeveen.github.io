import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {I18nextProvider, getI18n} from "react-i18next";
import Root from "./components/Root/Root.js";
import ConfigProvider from "./providers/ConfigProvider.js";
import QueryProvider from "./providers/QueryProvider.js";
import "./i18n/config.js";
import "./styles/main.css";
import {restoreWatchHistory} from "./stores/WatchHistoryStore.js";
import {initializeFavorites} from "./stores/FavoritesStore.js";
import {initializeAccount} from "./stores/AccountStore.js";
import {getPublicUrl} from "./utils/domHelpers.js";
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
    this.configLoadingHandler = (isLoading) => {
      console.info(`Loading config: ${isLoading}`);
    };
    this.configErrorHandler = (error) => {
      this.setState({error});
      console.info("Error while loading the config.json:", error);
    };
    this.configValidationCompletedHandler = (config) => {
      this.initializeServices(config);
    };
  }
  componentDidCatch(error) {
    this.setState({error});
  }
  initializeServices(config) {
    if (config.options.enableContinueWatching) {
      restoreWatchHistory();
    }
    initializeFavorites();
    if (config.cleengId) {
      initializeAccount();
    }
  }
  render() {
    return /* @__PURE__ */ React.createElement(I18nextProvider, {
      i18n: getI18n()
    }, /* @__PURE__ */ React.createElement(QueryProvider, null, /* @__PURE__ */ React.createElement(ConfigProvider, {
      configLocation: window.configLocation || "./config.json",
      onLoading: this.configLoadingHandler,
      onValidationError: this.configErrorHandler,
      onValidationCompleted: this.configValidationCompletedHandler
    }, /* @__PURE__ */ React.createElement(Router, {
      basename: getPublicUrl("/")
    }, /* @__PURE__ */ React.createElement(Root, {
      error: this.state.error
    })))));
  }
}
export default App;
