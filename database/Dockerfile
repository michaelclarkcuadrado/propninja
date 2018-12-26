FROM mariadb:10.3

ENV MYSQL_ROOT_PASSWORD="zoopydoopy"
#TODO development setting
EXPOSE 3306:3306

COPY schema/* /docker-entrypoint-initdb.d/
