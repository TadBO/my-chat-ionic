import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private router: Router) {}
  public navigatorToSearch(): void {
    this.router.navigateByUrl('/search');
  }
  public  doRefresh(event): void {
      console.log('Begin async operation');
      setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
      }, 2000);
  }
}
