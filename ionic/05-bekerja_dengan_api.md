# Bekerja dengan API

## Pengertian API
An application program interface (API) is a set of routines, protocols, and tools for building software applications. Basically, an API specifies how software components should interact. Additionally, APIs are used when programming graphical user interface (GUI) components. A good API makes it easier to develop a program by providing all the building blocks. A programmer then puts the blocks together.
sumber: https://www.webopedia.com/TERM/A/API.html

## JSON
JSON atau Javascript Object Notation adalah standar terbuka berbasis teks ringan yang dirancang untuk pertukaran data yang mudah dibaca manusia. Format JSON awalnya ditentukan oleh Douglas Crockford, dan dijelaskan di RFC 4627. Jenis media internet resmi untuk JSON adalah aplikasi / json. Ekstensi nama file JSON adalah .json. 

### Contoh Sederhana Dari JSON
Contoh berikut menunjukkan bagaimana menggunakan JSON untuk menyimpan informasi yang berkaitan dengan buku berdasarkan topik dan edisi nya:
```javascript
{
   "book": [
  
      {
         "id":"01",
         "judul": "Sifat Sholat Nabi",
         "edisi": "satu",
         "penulis": "Nashiruddin Al Albani"
      },
  
      {
         "id":"02",
         "judul": "Zadul Ma'ad",
         "edisi": "satu",
         "penulis": "Ibnul Qoyyim Al Jauziyah"
      }
   ]
}
```
Data JSON ditulis sebagai pasangan name / value.
Pasangan name / value terdiri dari nama field (dalam tanda kutip ganda), diikuti oleh titik dua, diikuti oleh sebuah nilai:
```javascript
"penulis": "Ibnul Qoyyim Al Jauziyah"
```
pada contoh tersebut penulis adalah sebagai name dan Ibnul Qoyyim Al Jauziyah adalah sebagai value

Tipe data pada JSON:
- boolean
- null
- string
  contoh
  ```javascript
  { "penulis": "Ibnul Qoyyim Al Jauziyah" }
  ```
- number
  ```javascript
  { "ukuran": 41 }
  ```
- object (JSON object)
  ```javascript
  {
    "mahasiswa":{ "nama":"Umar", "umur":17, "asal":"Pontianak" }
  }
  ```
- array

  
  {
    "nama":"Umar",
    "prodi":"sisfo",
    "matakuliah": [
        { "namamk":"Pemrograman Web", "sks":3},
        { "namamk":"Algoritma dan Pemrograman", "sks":3},
        { "namamk":"Pengelolaan Hubungan Pelanggan", "sks":3}
    ]
  }
 

## Penerapan pada IONIC
Pada kasus ini seumpamanya kita ingin menginstall pada ionic maka ada paket-paket angular yang harus dipersiapkan diantaranya (dan cara instalasinya):

```
npm install @angular/common@latest --save
npm install @angular/compiler@latest --save
npm install @angular/compiler-cli@latest --save
npm install @angular/core@latest --save
npm install @angular/forms@latest --save
npm install @angular/http@latest --save
npm install @angular/platform-browser@latest --save
npm install @angular/platform-browser-dynamic@latest --save
```


Lalu edit file package.json

```javascript
"dependencies": {
        "@angular/common": "^4.3.4",
        "@angular/compiler": "^4.3.4",
        "@angular/compiler-cli": "^4.3.4",
        "@angular/core": "^4.3.4",
        "@angular/forms": "^4.3.4",
        "@angular/http": "^4.3.4",
        "@angular/platform-browser": "^4.3.4",
        "@angular/platform-browser-dynamic": "^4.3.4",
        "@ionic-native/core": "3.12.1",
        "@ionic-native/splash-screen": "3.12.1",
        "@ionic-native/status-bar": "3.12.1",
        "@ionic/storage": "2.0.1",
        "ionic-angular": "3.6.0",
        "ionicons": "3.0.0",
        "rxjs": "5.4.0",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.12",
        "cordova-android": "^6.2.3",
        "cordova-browser": "^4.1.0",
        "cordova-plugin-advanced-http": "^1.7.0",
        "cordova-plugin-device": "^1.1.4",
        "cordova-plugin-ionic-webview": "^1.1.16",
        "cordova-plugin-splashscreen": "^4.0.3",
        "cordova-plugin-whitelist": "^1.3.1",
        "ionic-plugin-keyboard": "^2.2.1"
    },
```

selanjutnya buka file ‘src/app/app.module.ts’ dan tambahkan baris ini pada kumpulan baris import yang umumnya ada di barisan paling atas
```unix
import { HttpClientModule } from '@angular/common/http';
```

Lalu daftar pada  '@NgModule' imports setelah 'BrowserModule' dan akan terlihat seperti ini:
```javascript

imports: [
  BrowserModule,
  HttpClientModule,
  IonicModule.forRoot(MyApp)
],
```

lalu jalankan perintah berikut di terminal  untuk membuat service rest
```unix
ionic g provider Rest
```

Perintah yang baru saja anda jalankan akan membuat sebuat file baru yaitu ‘rest.ts’ file dan folder baru bernama ‘rest’ di dalam folder ‘providers’ dan sekaligus mendaftarkannya secara otomatis pada ‘app.module.ts’. Sekarang bukalah ‘providers/rest/rest.ts’ lalu ubahlah ‘http’ import dengan Angular 4.3 HTTPClient yang baru.
```javascript
import { HttpClient } from '@angular/common/http';
```
Jangan lupa untuk menggantinya jua pada contructor
```
constructor(public http: HttpClient) {
  console.log('Hello RestServiceProvider Provider');
}
```
Selanjutnya untuk membuat semua REST API bisa melalui fole rest.ts . Misalnya kita hendak mengambil salah satu API yang ditujukan untuk eksperiman sahaja. 

```javascript
apiUrl = 'https://jsonplaceholder.typicode.com';
```
Lalu tambahkan fungsi berikut setelah constuctor
```
getUsers() {
  return new Promise(resolve =>; {
    this.http.get(this.apiUrl+'/users').subscribe(data =>; {
      resolve(data);
    }, err =>; {
      console.log(err);
    });
  });
}
```


## Menampilkan data pada view
Untuk menampikan data pada view, sebagai contoh kita menggunakan template blank maka bukalah file src/pages/home/home.ts dan ubahlah seperti tampak pada kode dibawah
```javascript
import { RestProvider } from '../../providers/rest/rest';
Inject the `RestProvider` to the constructor.
constructor(public navCtrl: NavController, public restProvider: RestProvider) {}

users: any;
//Buat fungsi seperti di bawah untuk mengambil dari provider yang sudah kita buat tadi

getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
```

Lalu jalankanlah fungsi yang ada di provider di constructor yang ada di file home.ts tadi
```javascript
constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers();
  }
```
Lalu bukan dan ubahlah 'src/pages/home/home.html'
```html
<ion-content>
  <ion-list inset>
    <ion-item *ngFor="let user of users">
      <h2>{{user.name}}</h2>
      <p>{{user.email}}</p>
    </ion-item>
  </ion-list>
</ion-content>
```
Sekarang anda seharusnya sudah bisa melihat isi dari itu

## Membuat API Sendiri dengan SLIM framework
Slim FW merupakan salah satu framework mini yang biasa digunakan untuk membuat API
dan seterusnya ...

Untuk mudahnya download saja langsung dari sini:


