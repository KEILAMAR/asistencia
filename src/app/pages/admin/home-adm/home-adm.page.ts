import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-adm',
  templateUrl: './home-adm.page.html',
  styleUrls: ['./home-adm.page.scss'],
})
export class HomeAdmPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  async perfil(){
    this.router.navigate(['perfila'])
  }

  async clases(){
    this.router.navigate(['clasesa'])
  }

  async horario(){
    this.router.navigate(['horario'])
  }

  async qr(){
    this.router.navigate(['leerqr'])
  }

  async home(){
    this.router.navigate(['homea'])
  }
}
