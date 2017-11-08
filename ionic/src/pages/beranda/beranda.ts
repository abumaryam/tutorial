import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html',
})
export class BerandaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  rasa = "Manis";

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }

  lihatDetail(){
  	this.navCtrl.push(DetailPage)
  }

}
