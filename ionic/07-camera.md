# Menggunakan Camera

Untuk menggunakan camera pada ionic ada beberapa plugins cordova yang harus diinstall. Diantaranya

* cordova-plugin-camera: Needed for using the Ionic native camera
* cordova-plugin-file: Needed for copying the result of the camera into our filesystem
* cordova-plugin-file-transfer: Needed for uploading files
* cordova-plugin-filepath: Utility for fixing some Android paths to files

Oleh karenanya, untuk menginstall hal tersebut kita akan lakukan perintah-perintah di bawah ini:
```
npm install --save @ionic-native/camera @ionic-native/file @ionic-native/file-path @ionic-native/transfer

```
bagi yang sudah pernah install plugin camera, maka perintah **@ionic-native/camera** tidak perlu dilakukan. 
sumber: https://devdactic.com/ionic-2-images/

