import Vue from 'vue'
import { Aside,
         Button, 
         Card, 
         Container, 
         Dialog, 
         Dropdown, 
         DropdownItem, 
         DropdownMenu, 
         Form, 
         FormItem, 
         Header, Image, 
         Input, 
         Loading, 
         Main, 
         Message, 
         MessageBox, 
         Option, 
         Pagination, 
         Popconfirm, 
         Popover, 
         Select, 
         Switch, 
         Table, 
         TableColumn, 
         Upload } from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Upload)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Image)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Popover)
Vue.use(Loading)
Vue.use(Pagination)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Select)
Vue.use(Option)




Vue.prototype.$confirm = MessageBox
Vue.prototype.$message = Message