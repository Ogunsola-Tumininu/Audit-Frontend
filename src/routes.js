import createAudit from './components/createAudit.vue';
import listAudits from './components/listAudits.vue';
import createCategory from './components/createCategory.vue';


export default [
    {path:'/', component:listAudits},
    {path:'/add', component:createAudit},
    {path:'/addcat/:id', component: createCategory}

]
