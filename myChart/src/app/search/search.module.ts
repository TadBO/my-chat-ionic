import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {RouterModule} from '@angular/router';
import {searchRouters} from './search.routers';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(searchRouters)
    ],
    declarations: [SearchComponent]
})
export class SearchModule {
}
