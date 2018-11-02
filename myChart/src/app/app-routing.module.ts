import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'message/:id', loadChildren: './message/message.module#MessageModule'},
    {
        path: 'search',
        loadChildren: './search/search.module#SearchModule'
    },
    {
        path: '**',
        loadChildren: './tabs/tabs.module#TabsPageModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
