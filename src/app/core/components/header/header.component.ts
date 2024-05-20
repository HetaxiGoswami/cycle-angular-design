import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

   toggleMenu() {
    const menu = document.querySelector('.header-links ul');
    if (menu) {
        menu.classList.toggle('active');
    } else {
        console.error("Menu element not found");
    }
}


}
