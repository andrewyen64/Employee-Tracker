INSERT INTO department (name)
VALUES ("Production"),
    ("Marketing"),
    ("Operations"),
    ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Manager", 100000, 1),
    ("Production Accountant", 70000, 1),
    ("Market Research Analyst", 65000, 2),
    ("Logistics Manager", 80000, 3),
    ("HR Specialist", 60000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Gustavo", 1, null),
    ("Eric", "Lee", 1, 1),
    ("Han", "Kim", 2, null),
    ("Antonio", "Martinez", 3, null),
    ("Justin", "Kwon", 4, null);