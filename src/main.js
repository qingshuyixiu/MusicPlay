import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'vant/lib/index.css'
import {
    Tabbar,
    TabbarItem,
    Search,
    Image as VanImage,
    Button,
    Divider,
    Swipe,
    SwipeItem,
    Icon,
    Cell,
    CellGroup,
    Grid,
    GridItem,
    Tab,
    Tabs,
    Field,
    Form,
    Toast,
    Sku,
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    RadioGroup,
    Radio,
    Stepper,
    SubmitBar,
    Checkbox,
    CheckboxGroup,
    AddressList,
    Area,
    Popup,
    AddressEdit,
    Card,
    Step,
    Steps,
    ContactCard,
    Dialog,
    Skeleton
} from "vant";
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Search);
Vue.use(VanImage);
Vue.use(Button);
Vue.use(Divider);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon);
Vue.use(Cell).use(CellGroup);
Vue.use(Grid).use(GridItem);
Vue.use(Tab).use(Tabs);
Vue.use(Form).use(Field);
Vue.use(Toast);
Vue.use(Sku);
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
Vue.use(RadioGroup).use(Radio);
Vue.use(Stepper);
Vue.use(SubmitBar);
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(AddressList);
Vue.use(Area).use(Popup);
Vue.use(AddressEdit);
Vue.use(Card);
Vue.use(Popup);
Vue.use(Step).use(Steps);
Vue.use(ContactCard);
Vue.use(Dialog);
Vue.use(Skeleton);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')