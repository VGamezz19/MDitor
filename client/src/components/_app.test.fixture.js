import {App} from './'
const match = {
    url: '/',
    path:'/'
}
export default [{
    component: App,
    name: 'Main App',
    url: '/',
    props: { match }
}]