## Initialize Database

#### Install MySql

Install mysql server and client in Rocky Linux -9 

```
sudo dnf install mysql mysql-server
```

Start the MySQL service and enable it to automatically start on boot by running the following command.

```
sudo systemctl enable --now mysqld
sudo systemctl start mysqld
sudo systemctl status mysqld
```
#### Securing MySQL

```
sudo mysql_secure_installation
```

Once secured, you can connect to MySQL and review the existing databases on your database server by using the following command.

```
sudo mysql -e "SHOW DATABASES;" -p
```

#### Aceess to database

```
sudo mysql -u root -proot -h localhost test
```

##### Show tables colums:
```
DESCRIBE books;
```
##### Show table datas
```
SELECT * FROM test.books;
```
