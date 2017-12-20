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

