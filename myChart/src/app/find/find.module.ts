import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FindComponent} from './find.component';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([{path: '', component: FindComponent}])
    ],
    declarations: [FindComponent]
})
export class FindModule {
}
