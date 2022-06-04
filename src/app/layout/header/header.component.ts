import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }

  menu(){
    var menu = document.getElementById('mobileMenu');
    if(menu?.classList.contains('hidden')){
menu.classList.remove('hidden');
    }else{
menu?.classList.add('hidden');
    }
  }
  
}
