import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message.component';
import {RouterModule} from '@angular/router';
import {messageRouter} from './message.routers';
import {IonicModule} from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(messageRouter)
    ],
    declarations: [MessageComponent]
})
export class MessageModule {
}
