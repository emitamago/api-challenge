DROP DATABASE IF EXISTS "api-challenge-one";
CREATE DATABASE "api-challenge-one";
\c "api-challenge-one"


CREATE TABLE users (
  user_id INTEGER,
  user_name TEXT NOT NULL,
  user_age INTEGER,
  user_gender CHAR,
  last_location TEXT,
  lat FLOAT,
  long FLOAT
);

COPY users 
FROM '/Users/emitsukuda/desktop/api-challenge-1/users.csv' 
DELIMITER ',' CSV HEADER;
