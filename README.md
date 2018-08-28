# Similar-Experiences
Mysql
LOAD DATA INFILE 'data2.csv' INTO TABLE SimilarExperiences   FIELDS TERMINATED BY ',' ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;

docker-compose up
docker build -t tysfirstimage .
docker rmi a535 -f
docker images
docker ps
docker stop 09f

vacuum full analyze table_name;

Postgres
psql -h localhost (command line)


pm2 list
pm2 delete all
pm2 start index.js --name server1
pm2 start index.1.js --name server2
pm2 start index.2.js --name server3



Within EC2
-get docker and what not
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04

-docker pull postgres

-sudo docker run postgres -p 5432:5432

-psql -h ec2-54-183-231-150.us-west-1.compute.amazonaws.com -p 5432 -U postgres