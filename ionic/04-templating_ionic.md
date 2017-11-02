#Templating Ionic

##Pengembalian Template Tab
Pada pertemuan sebelumnya kita telah memodifikasi template tab. Kali ini kita akan mencoba mengembalikan template tersebut dan akan dijadikan sebagai dasar dalam membangun aplikasi. Tahapannya adalah sebagai berikut.
Backup hasil pembelajaran sebelumnya dengan menduplikasi (copas) folder /src/pages/tabs dan rename menjadi backuptab
Buka file tabs.ts pada /src/pages/tabs dan isikanlah
```
import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
 templateUrl: 'tabs.html'
})
export class TabsPage {

 tab1Root = HomePage;
 tab2Root = AboutPage;
 tab3Root = ContactPage;

 constructor() {

 }
}
```


Buka file tabs.html pada /src/pages/tabs dan isikanlah
```
<ion-tabs>
 <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
 <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>
 <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>
</ion-tabs>
```
##Modifikasi Halaman
Contoh kasus kita adalah membuat aplikasi resep. Langkah-langkah membuatnya adalah

Pada rancangan kita ada 4 halaman dasar. (1) Resep terbaru (2) Kategori Resep (3) Favorit (4) Tentang. Oleh Karena itu kita perlu memodifikasi nama-nama menu tab yang ada. Modifikasilah file src/pages/tabs/tabs.html menjadi
```
<ion-tabs>
 <ion-tab [root]="tab1Root" tabTitle="Beranda" tabIcon="home"></ion-tab>
 <ion-tab [root]="tab2Root" tabTitle="Kategori" tabIcon="funnel"></ion-tab>
 <ion-tab [root]="tab3Root" tabTitle="Favorit" tabIcon="bookmark"></ion-tab>
 <ion-tab [root]="tab4Root" tabTitle="Tentang" tabIcon="help"></ion-tab>
</ion-tabs>
```
Catatan:
pada attribut tabIcon terdapat nama-nama icon yang itu semuanya dapat dilihat pada alamat http://ionicons.com/

Agar kita benar-benar membuat halaman yang baru, maka kita dapat membuat halaman baru dengan ionic cli. Caranya adalah dengan mengetikkan perintah berikut untuk membuat halaman baru dengan nama beranda:
```
ionic generate page beranda
```
Lakukan hal yang sama untuk halaman kategori, favorit, dan tentang
Modifikasilah isi dari src/pages/beranda/beranda.html dengan mengubah isi dari elemen <ion-content> sehingga menjadi seperti di bawah ini
```
<ion-header>
  <ion-navbar>
    <ion-title>Beranda</ion-title>
  </ion-navbar>
</ion-header>


<ion-content padding>
<h2>Ini adalah halaman beranda</h2>
</ion-content>
```

Lakukan hal yang sama untuk halaman kategori, favorit, dan tentang
Masukkanlah halaman-halaman tersebut sebagai halaman tab dengan memodifikasi file src/pages/tabs/tabs.ts menjadi
```
import { Component } from '@angular/core';

import { BerandaPage } from '../beranda/beranda';
import { KategoriPage } from '../kategori/kategori';
import { FavoritPage } from '../favorit/favorit';
import { TentangPage } from '../tentang/tentang';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BerandaPage;
  tab2Root = KategoriPage;
  tab3Root = FavoritPage;
  tab4Root = TentangPage;
  

  constructor() {

  }
}
```

Daftarkan halaman-halaman yang baru dibuat pada src/app/app.module.ts menjadi seperti berikut ini:
```
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BerandaPage } from '../pages/beranda/beranda';
import { KategoriPage } from '../pages/kategori/kategori';
import { FavoritPage } from '../pages/favorit/favorit';
import { TentangPage } from '../pages/tentang/tentang';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilPage } from '../pages/profil/profil';

@NgModule({
  declarations: [
    MyApp,
    BerandaPage,
    KategoriPage,
    FavoritPage,
    TentangPage,
    TabsPage,
    ProfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BerandaPage,
    KategoriPage,
    FavoritPage,
    TentangPage,
    TabsPage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
```

Membuat Halaman Beranda
Pada proses membuat halaman beranda perlu ditampilkan daftar 5 resep terbaru. Ini tentunya diambil dari data online yang ada di database online tersebut menggunakan REST API. Namun sebelum kita menggunakan REST maka pada pembahasan kali ini kita berfokus pada pembuatan templatenya terlebih dahulu. Kita akan menggunakan card yang terdapat gambar di dalamnya. Dokumentasi dari card ini dapat dilihat pada alamat https://ionicframework.com/docs/components/#card-image
Untuk melakukan hal ini kita berfokus pada direktori src/pages/beranda. Modifikasilah halaman beranda.html sehingga menjadi 
```
<ion-header>

  <ion-navbar>
    <ion-title>Beranda</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
  <ion-card>

    <img src="http://matanadi.xyz/img/photo01.png"/>

    <ion-card-content>
      <ion-card-title>
        Es Krim Cokelat
      </ion-card-title>
      <p>
        Es krim cokelat dengan campuran susu di dalamnya yang menjadikan es krim lembut dan mudah lumer di mulut.
      </p>
    </ion-card-content>

    <ion-row no-padding>
      <ion-col>
        <button ion-button clear small color="success" icon-start>
          <ion-icon name='star'></ion-icon>
          Favorite
        </button>
      </ion-col>
      <ion-col text-center>
        <button ion-button clear small color="success" icon-start>
          <ion-icon name='eye'></ion-icon>
          Selengkapnya
        </button>
      </ion-col>

    </ion-row>

  </ion-card>
</ion-content>
```

Maka kita sudah dapat melihat hasil dari halaman beranda kita.


Halaman Detail
Halaman detail adalah halaman yang apabila di klik selengkapnya maka akan tampil resep lengkap. Langkah-langkah pembuatannya adalah sebagai berikut:
Jalankan perintah untuk membuat halaman baru
ionic generate page detail

Modifikasi halaman src/pages/detail/detail.html menjadi
```
<ion-header>

  <ion-navbar>
    <ion-title>Detail Resep</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
	<h3>Es Krim Cokelat</h3>
    <img src="http://matanadi.xyz/img/photo01.png"/>
	<h4>Bahan-bahan</h4>
	<ul>
		<li>1 kaleng susu kental manis cokelat</li>
		<li>1 SDM SP : Cairkan</li>
		<li>500 ml susu cair cokelat, Saya pake ultra full cream</li>
	</ul>
	<h4>Cara Membuat</h4>
	<p>	Cairkan SP, tempatkan diwadah, bisa di rendam air panas atau dalam magicom. Campur dgn susu kental manis. Mixer hingga mengembang 2-3x lipat. Tambahkan susu cair sambil di mixed kecepatan rendah saja.Setelah tercampur rata dan adonan terlihat lembut. Simpan dalam wadah lalu bekukan min 8 jam. Siap disajikan.
	</p>
</ion-content>
```

Daftarkan page detail tadi pada src/app/app.module.ts sehingga berisi
```
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BerandaPage } from '../pages/beranda/beranda';
import { KategoriPage } from '../pages/kategori/kategori';
import { FavoritPage } from '../pages/favorit/favorit';
import { TentangPage } from '../pages/tentang/tentang';
import { DetailPage } from '../pages/detail/detail';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilPage } from '../pages/profil/profil';

@NgModule({
  declarations: [
    MyApp,
    BerandaPage,
    KategoriPage,
    FavoritPage,
    TentangPage,
    DetailPage,
    TabsPage,
    ProfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BerandaPage,
    KategoriPage,
    FavoritPage,
    TentangPage,
    DetailPage,
    TabsPage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
```

Selanjutnya adalah membuat aksi masuk ke halaman detail jika tombol selengkapnya diklik. Maka cukup kita tambahkan aksi (click) pada tombol selengkapnya yang ada di file filesrc/pages/beranda/beranda.html
```
<ion-header>

  <ion-navbar>
    <ion-title>Beranda</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
  <ion-card>

    <img src="http://matanadi.xyz/img/photo01.png"/>

    <ion-card-content>
      <ion-card-title>
        Es Krim Cokelat
      </ion-card-title>
      <p>
        Es krim cokelat dengan campuran susu di dalamnya yang menjadikan es krim lembut dan mudah lumer di mulut.
      </p>
    </ion-card-content>

    <ion-row no-padding>
      <ion-col>
        <button ion-button clear small color="success" icon-start>
          <ion-icon name='star'></ion-icon>
          Favorite
        </button>
      </ion-col>
      <ion-col text-center>
        <button ion-button clear small color="success" icon-start (click)="lihatDetail()">
          <ion-icon name='eye'></ion-icon>
          Selengkapnya
        </button>
      </ion-col>

    </ion-row>

  </ion-card>


</ion-content>
```

Kemudian pada file src/pages/beranda/beranda.ts tambahkanlah fungsi lihatDetail pada class BerandaPage. Dan jangan lupa pula untuk menambahkan import { DetailPage } from '../detail/detail'; pada file ini sehingga kode selengkapnya adalah seperti berikut ini:
```
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad BerandaPage');
  }

  lihatDetail(){
  	this.navCtrl.push(DetailPage)
  }

}
```

Maka halaman dapat anda cobakan untuk dibuka


Halaman Kategori
Halaman kategori adalah halaman yang memuat daftar dari kategori-kategori resep yang telah ada di database. Ketika kategori tersebut diklik maka akan muncul kumpulan resep yang mempunyai kategori yang dipilih tersebut. Untuk itu kita memerlukan komponen ionic yang disebut lists. Dokumentasi dari lists dapat dilihat pada alamat berikut https://ionicframework.com/docs/components/#lists

Untuk membuatnya kita akan memodifikasi halaman kategori. Caranya adalah modifikasi terlebih dahulu file src/pages/kategori/kategori.ts dengan menambahkan variabel array dengan nama kumpulan kategori hingga hasil dari file tersebut menjadi seperti di bawah ini
```
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-kategori',
  templateUrl: 'kategori.html',
})
export class KategoriPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KategoriPage');
  }

   kumpulankategori = [
   	'Desert',
   	'Masakan Nusantara',
   	'Cake',
   	'Jajanan Pasar',
   	'Minuman'
  ];

}
```
Pada halaman src/pages/kategori/kategori.html modifikasilah file tersebut menjadi seperti di bawah ini dengan menambahkan list

```
<ion-header>

  <ion-navbar>
    <ion-title>Kategori</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
 <ion-list>
    <button ion-item *ngFor="let item of kumpulankategori">
      {{ item }}
    </button>
  </ion-list>


</ion-content>
```