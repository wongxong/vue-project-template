import Vue from "vue";
import {
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  Dropdown,
  DropdownItem,
  Tooltip,
  Pagination,
  Dialog,
  Table,
  TableColumn,
  Form,
  FormItem,
  Select,
  Option,
  OptionGroup,
  Input,
  Button,
  Checkbox,
  Link,
  Backtop,
  Progress,
  Empty,
  Collapse,
  CollapseItem,
  Tree,
  Loading,
  MessageBox,
  Message,
  Notification,
  RadioGroup,
  Radio
} from "element-ui";

import GlobalPagination from "./components/global-pagination";
import {
  globalConfirm,
  globalErrorMessage,
  globalSuccessMessage
} from "./utils/global-notify";

[GlobalPagination].forEach(component => {
  Vue.component(component.name, component);
});

Vue.prototype.$ELEMENT = { 
  // size: "small", 
  zIndex: 2000 
};

[
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  Dropdown,
  DropdownItem,
  Tooltip,
  Pagination,
  Dialog,
  Table,
  TableColumn,
  Form,
  FormItem,
  Select,
  Option,
  OptionGroup,
  Input,
  Button,
  Checkbox,
  Link,
  Backtop,
  Progress,
  Empty,
  Collapse,
  CollapseItem,
  Tree,
  RadioGroup,
  Radio
].forEach(component => {
  Vue.use(component);
});

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = globalConfirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$errorMsg = globalErrorMessage;
Vue.prototype.$successMsg = globalSuccessMessage;