# Otentikasi

## Install Sqlite

```
ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage

```

# Setting Module.ts

```
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // ...
  ],
  providers: [
    // ...
  ]
})
export class AppModule {}
```

# Gunakan pada pages untuk menyimpan token

```
import { Storage } from '@ionic/storage';

...

constructor(public navCtrl: NavController, 
        public navParams: NavParams,
        public restProvider:RestProvider,
        public storage:Storage) {
  }

onRegister(form: NgForm) {
 storage.set('token', this.user.token);
          storage.set('user_id', this.user.user_id);
          storage.get('token').then((val) => {
            console.log('Tokennya adalah ', val);
          });
}
```
