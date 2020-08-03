INSERT INTO department (name)
VALUES  ("Production");
INSERT INTO department (name)
VALUES ("Marketing");
INSERT INTO department (name)
VALUES ("Operations");
INSERT INTO department (name)
VALUES ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Manager", 100000, 1);
INSERT INTO role(title, salary, department_id)
VALUES ("Production Accountant", 70000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Market Research Analyst", 65000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Logistics Manager", 80000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Specialist", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Gustavo", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Eric", "Lee", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Han", "Kim", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Antonio", "Martinez", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Justin", "Kwon", 4, null);