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

##### Create schema
```
CREATE SCHEMA test;
```

##### Show tables colums:
```
DESCRIBE books;
```
##### Show table datas
```
SELECT * FROM test.books;
```
##### Insert data into tables
```
INSERT INTO test.books (title, description, cover, price) VALUES ('Childs play', 'Child Book', 'fancy pens', 18);
```
##### Create table
```
CREATE TABLE test.books (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    description VARCHAR(255) NOT NULL,
    cover VARCHAR(45),
    PRIMARY KEY (id)
);
```
```
ALTER TABLE test.books ADD COLUMN price INT NOT NULL AFTER cover;
```

## Initialization backend

```
npm init -y
npm i express mysql nodemon
npm start
```
Nodemon is a popular tool used in Node.js development. It stands for "Node Monitor" and is designed to automatically monitor and restart your Node.js application when changes are detected in the source code.



## Initialization frontend

```
npx create-react-app .
npm start
```
