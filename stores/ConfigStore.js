import {Store} from "pullstate";
export const ConfigStore = new Store({
  configLocation: "",
  isLoading: false,
  config: {
    id: "",
    siteName: "",
    description: "",
    footerText: "",
    player: "",
    assets: {},
    content: [],
    menu: [],
    cleengSandbox: true,
    options: {
      shelveTitles: true
    }
  },
  accessModel: "SVOD"
});
