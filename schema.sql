CREATE TABLE `Teacher` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`email` VARCHAR(50) NOT NULL UNIQUE,
	`password` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `Problem` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`question` VARCHAR(200) NOT NULL,
	`answer_id` INT NOT NULL,
	`subject` INT NOT NULL,
	`theme` INT NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `Answer` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`text` VARCHAR(200) NOT NULL,
	`subject` INT NOT NULL,
	`theme` INT NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `Student` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`email` VARCHAR(50) NOT NULL UNIQUE,
	`password` VARCHAR(50) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `List` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`theme` VARCHAR(50) NOT NULL,
	`deadline` TIME NOT NULL,
	`student_id` INT NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `List_Has_Problem` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`list_id` INT NOT NULL,
	`problem_id` INT NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `Class` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
	`teacher_id` INT NOT NULL,
	`theme` TEXT NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `Student_Has_Class` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`student_id` INT NOT NULL,
	`class_id` INT NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE = InnoDB;

ALTER TABLE `Problem` ADD CONSTRAINT `Problem_fk0` FOREIGN KEY (`answer_id`) REFERENCES `Answer`(`id`);

ALTER TABLE `List` ADD CONSTRAINT `List_fk0` FOREIGN KEY (`student_id`) REFERENCES `Student`(`id`);

ALTER TABLE `List_Has_Problem` ADD CONSTRAINT `List_Has_Problem_fk0` FOREIGN KEY (`list_id`) REFERENCES `List`(`id`);

ALTER TABLE `List_Has_Problem` ADD CONSTRAINT `List_Has_Problem_fk1` FOREIGN KEY (`problem_id`) REFERENCES `Problem`(`id`);

ALTER TABLE `Class` ADD CONSTRAINT `Class_fk0` FOREIGN KEY (`teacher_id`) REFERENCES `Teacher`(`id`);

ALTER TABLE `Student_Has_Class` ADD CONSTRAINT `Student_Has_Class_fk0` FOREIGN KEY (`student_id`) REFERENCES `Student`(`id`);

ALTER TABLE `Student_Has_Class` ADD CONSTRAINT `Student_Has_Class_fk1` FOREIGN KEY (`class_id`) REFERENCES `Class`(`id`);

