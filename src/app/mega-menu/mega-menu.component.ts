import { Component, OnInit } from '@angular/core';
import { MegaMenuService } from '../mega-menu.service';

@Component({
  selector: 'app-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent implements OnInit {

  menuData: any;

  constructor(private megamenuService: MegaMenuService) { }

  ngOnInit(): void {
    this.megamenuService.getMenuData().subscribe(data => {
      this.menuData = data.header_menu;
    });
  }

}
