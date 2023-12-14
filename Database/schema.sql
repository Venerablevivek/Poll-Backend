
CREATE DATABASE polls;

USE polls;

CREATE TABLE polls_info (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  poll_category VARCHAR(255) NOT NULL,
  StartDate DATE NOT NULL,
  EndDate DATE NOT NULL,
  question_id INT,
  MIN_REWARD INT NOT NULL,
  MAX_REWARD INT NOT NULL,
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  poll_id INT ,
  options JSON NOT NULL ,
  Question_text VARCHAR(255) NOT NULL,
  type ENUM('single', 'multiple') NOT NULL,
  FOREIGN KEY (poll_id) REFERENCES polls_info(id)
);

CREATE TABLE options (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question_id INT,
  text VARCHAR(255) NOT NULL,
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE userData (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_Name VARCHAR(255) NOT NULL,
    votes_id INT,
    FOREIGN KEY (votes_id) REFERENCES votes(id)
);

CREATE TABLE votes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  option_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (option_id) REFERENCES options(id),
  FOREIGN KEY (user_id) REFERENCES userData(id)
);
