import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';



@IonicPage()
@Component({
  selector: 'page-kategori',
  templateUrl: 'kategori.html',
})
export class KategoriPage {



  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
    this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KategoriPage');
  }

  users: any;
  //Buat fungsi seperti di bawah untuk mengambil dari provider yang sudah kita buat tadi

  getUsers() {
      this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
    }




}
