import Vue from "vue";
import {
  Menu,
  Submenu,
  MenuItem,
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

Vue.prototype.$ELEMENT = { 
  size: "small", 
  zIndex: 2000 
};

[
  Menu,
  Submenu,
  MenuItem,
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
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;