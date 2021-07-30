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
  Notification
} from "element-ui";

import GlobalPagination from "./components/global-pagination";

[GlobalPagination].forEach(component => {
  Vue.component(component.name, component);
});

Vue.prototype.$ELEMENT = { 
  size: "small", 
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
  Tree
].forEach(component => {
  Vue.use(component);
});

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = function(message, options) {
  return MessageBox.confirm(
    message,
    Object.assign(
      {
        title: "确认框",
        cancelButtonClass: "el-button--primary",
        confirmButtonClass: "el-button--danger"
      },
      options
    )
  );
};
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;