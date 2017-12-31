# Menggunakan Camera

Untuk menggunakan camera pada ionic ada beberapa plugins cordova yang harus diinstall. Diantaranya

* cordova-plugin-camera: Needed for using the Ionic native camera
* cordova-plugin-file: Needed for copying the result of the camera into our filesystem
* cordova-plugin-file-transfer: Needed for uploading files
* cordova-plugin-filepath: Utility for fixing some Android paths to files

Oleh karenanya, untuk menginstall hal tersebut kita akan lakukan perintah-perintah di bawah ini:
```
npm install --save @ionic-native/camera @ionic-native/file @ionic-native/file-path @ionic-native/transfer
ionic plugin add cordova-plugin-camera --save
ionic plugin add cordova-plugin-file --save
ionic plugin add cordova-plugin-file-transfer --save
ionic plugin add cordova-plugin-filepath --save
```

Kemudian seperti biasa daftarkan plugin-plugin tadi ke dalam src/app/app.module.ts
```
...
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
...
...
providers: [
    StatusBar,
    SplashScreen,
    File,
    Transfer,
    Camera,
    FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
...
```
bagi yang sudah pernah install plugin camera, maka perintah **@ionic-native/camera** tidak perlu dilakukan. 
sumber: https://devdactic.com/ionic-2-images/

