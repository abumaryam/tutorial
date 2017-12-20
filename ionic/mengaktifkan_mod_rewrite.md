aktifkan
```
sudo a2enmod rewrite
```

restart apache
```
sudo service apache2 restart
```

edit file sites-default
```
sudo nano /etc/apache2/sites-available/default
```

isinya:
```
<Directory /var/www/>
                Options Indexes FollowSymLinks MultiViews
                AllowOverride All
                Order allow,deny
                allow from all
</Directory>
```

restart apache lagi
```
sudo service apache2 restart
```
