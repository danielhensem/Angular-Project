import { Routes } from '@angular/router';

import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Services } from './services/services';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
];

