import { Routes } from '@angular/router';
import { EntryPageComponent } from './pages/entry-page/entry-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'entry',
        pathMatch: 'full'
    },
    {
        path: 'entry',
        component: EntryPageComponent
    },
    {
        path: 'projects',
        component: ProjectsPageComponent
    }
];
