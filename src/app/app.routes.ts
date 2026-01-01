
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import {ProductDetail } from './pages/prodetails/prodetails';
 import { Cards } from './components/cards/cards';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path:'',
        component:Cards
    },
    {
        path: 'product/:id',
        component: ProductDetail
    }
];