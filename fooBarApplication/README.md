Requirements (run as admin privileges):
- git         - https://git-scm.com/downloads (need command line version)
- Java 8      - http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
- Maven       - http://maven.apache.org/download.cgi
- npm(nodejs) - https://nodejs.org/download/
- bower       - npm install -g bower
- gulp        - npm install -g gulp

Confirm the following are on your classpath:
'java -version'
'mvn --version'
'npm --version'
'bower --version'

For live code concat:
'gulp default' - this is ongoing, so leave this terminal running

Run:
mvn spring-boot:run -Dspring.config.location=application.properties


if missing dependencies:
npm install
bower install

to see application:
open browser to http://localhost:8080/

If you have a settings.xml in your local maven repository
 (C:\Users\<username>\.m2\settings.xml)
 you will need to rename this file when updating project if your
 settings.xml points to a different maven repository
 
***DATABASE STRUCTURE***
TABLE: users
+----------+-----------------------+------+-----+---------+----------------+
| Field    | Type                  | Null | Key | Default | Extra          |
+----------+-----------------------+------+-----+---------+----------------+
| id       | mediumint(8) unsigned | NO   | PRI | NULL    | auto_increment |
| username | varchar(50)           | NO   |     | NULL    |                |
| password | varchar(20)           | NO   |     | NULL    |                |
| cc_num   | char(16)              | NO   |     | NULL    |                |
| cc_mo    | tinyint(3) unsigned   | NO   |     | NULL    |                |
| cc_yr    | tinyint(3) unsigned   | NO   |     | NULL    |                |
| cc_cvv   | tinyint(3) unsigned   | NO   |     | NULL    |                |
+----------+-----------------------+------+-----+---------+----------------+

TABLE: orders
+-----------------+-----------------------+------+-----+-------------------+----------------+
| Field           | Type                  | Null | Key | Default           | Extra          |
+-----------------+-----------------------+------+-----+-------------------+----------------+
| id              | mediumint(8) unsigned | NO   | PRI | NULL              | auto_increment |
| user_id         | mediumint(8) unsigned | NO   | MUL | NULL              |                |
| restaurant_name | varchar(100)          | NO   |     | NULL              |                |
| order_address   | varchar(200)          | NO   |     | NULL              |                |
| deliver_address | varchar(200)          | NO   |     | NULL              |                |
| order_name      | text                  | NO   |     | NULL              |                |
| price           | decimal(8,2)          | NO   |     | NULL              |                |
| time            | timestamp             | NO   |     | CURRENT_TIMESTAMP |                |
+-----------------+-----------------------+------+-----+-------------------+----------------+

TABLE: drivers
+-----------+-----------------------+------+-----+---------+----------------+
| Field     | Type                  | Null | Key | Default | Extra          |
+-----------+-----------------------+------+-----+---------+----------------+
| id        | mediumint(8) unsigned | NO   | PRI | NULL    | auto_increment |
| username  | varchar(50)           | NO   |     | NULL    |                |
| password  | varchar(20)           | NO   |     | NULL    |                |
| cc_num    | char(16)              | NO   |     | NULL    |                |
| cc_mo     | tinyint(3) unsigned   | NO   |     | NULL    |                |
| cc_yr     | tinyint(3) unsigned   | NO   |     | NULL    |                |
| cc_cvv    | tinyint(3) unsigned   | NO   |     | NULL    |                |
| available | enum('yes','no')      | YES  |     | no      |                |
| location  | tinyint(3) unsigned   | YES  |     | NULL    |                |
+-----------+-----------------------+------+-----+---------+----------------+

HOW TO GET ONTO THE DATABASE:
shell> mysql -h host -u myname -p'mypass' mydb

Host: sql5.freesqldatabase.com
Database name: sql590678
Database user: sql590678
Database password: gH6!dJ2!
Port number: 3306
**note: must do quotes around password due to the ! operator
