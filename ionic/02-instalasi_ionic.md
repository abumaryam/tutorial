# Instalasi Ionic 3 di LinuxMint 18

## Lakukan update dan instalasi depedensi

```
sudo apt-get update
sudo apt-get install python-software-properties python g++ make git
sudo apt-get install build-essential
sudo apt-get install default-jdk
```

## Langkah selanjutnya adalah install android studio
Dapat diunduh di sini https://developer.android.com/studio/index.html

## Konfigurasi untuk persiapan instalasi nodejs
```
git config --global user.email "apa@apa.com"
git config --global user.name "abumaryam"
```

## Instal NodeJS
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
echo prefix = ~/.node >> ~/.npmrc
echo 'export PATH=$HOME/.node/bin:$PATH' >> ~/.bashrc
. ~/.bashrc
```

## Install Cordova
```
npm install -g cordova
sudo chown namakamu:namakamu /home/namakamu/.config/configstore/update-notifier-npm.json
npm install -g ionic
echo prefix = ~/.node >> ~/.npmrc
echo 'export PATH=$HOME/.node/bin:$PATH' >> ~/.bashrc
. ~/.bashrc

```

## Install SDK MAN untuk menginstall gradle
```
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install gradle 4.2
```

## Reinstall android sdk tools melalui android studio:
Beberapa yang harus direinstall adalah
- Android sdk build tools
- Android sdk platform tools
- Android sdk tools

## Setting Lokasi Android SDK
```
export ANDROID_HOME=/home/namakamu/Android/Sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
npm install -g npm@latest-4
```

## Buat aplikasi IONIC dan Coba Jalankan
```
ionic start aplikasisatu
cd aplikasisatu
ionic serve
```

## Build aplikasi sebagai aplikasi android
ionic cordova build android