import HomeComponent from '../components/home/HomeComponent'
import ProductsComponent from '../components/products/ProductsComponent'

export default [
    {path: '/', component: HomeComponent, name: 'home'},
    {path: '/product', component: ProductsComponent, name: 'produtos'}
]