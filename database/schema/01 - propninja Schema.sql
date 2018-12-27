-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema spg-propninja
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema spg-propninja
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spg-propninja` ;
USE `spg-propninja` ;

-- -----------------------------------------------------
-- Table `spg-propninja`.`lenders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`lenders` (
  `lender_ID` INT NOT NULL AUTO_INCREMENT,
  `lender_Name` VARCHAR(45) NULL,
  PRIMARY KEY (`lender_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spg-propninja`.`property_Classes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`property_Classes` (
  `propClass_ID` INT NOT NULL AUTO_INCREMENT,
  `propClass_Name` VARCHAR(255) NULL,
  PRIMARY KEY (`propClass_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spg-propninja`.`loan_Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`loan_Types` (
  `loan_Type_ID` INT NOT NULL AUTO_INCREMENT,
  `loan_Type_Name` VARCHAR(255) NULL,
  PRIMARY KEY (`loan_Type_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spg-propninja`.`deal_Types`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`deal_Types` (
  `deal_Type_ID` INT NOT NULL AUTO_INCREMENT,
  `deal_Type_Name` VARCHAR(255) NULL,
  PRIMARY KEY (`deal_Type_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spg-propninja`.`properties`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`properties` (
  `prop_ID` INT NOT NULL AUTO_INCREMENT,
  `prop_address` VARCHAR(255) NOT NULL,
  `purchase_Date` DATE NULL,
  `purchase_Price` DECIMAL(19,2) NULL,
  `deal_Type_ID` INT NULL,
  `Owning Entity` VARCHAR(255) NULL,
  `propClass_ID` INT NULL,
  `gross_sqft` DECIMAL(10,2) NULL,
  `year_Built` SMALLINT(6) UNSIGNED NULL,
  `tax_Assessment` DECIMAL(19,2) NULL,
  `yearly_Tax` DECIMAL(19,2) NULL,
  `yearly_Insurance` DECIMAL(19,2) NULL,
  `refinance_Date` DATE NULL,
  `lender_ID` INT NULL,
  `loan_Type_ID` INT NULL,
  `loan_Acct_Number` VARCHAR(255) NULL,
  `loan_Payment_Day` TINYINT(2) UNSIGNED NULL,
  `monthly_Loan_Payment_Total` DECIMAL(19,2) UNSIGNED NULL,
  `monthly_Loan_Payment_Interest` DECIMAL(19,2) UNSIGNED NULL,
  `monthly_Loan_Payment_Principal` DECIMAL(19,2) UNSIGNED NULL,
  `current_Debt` DECIMAL(19,2) UNSIGNED NULL,
  `current_Value` DECIMAL(19,2) UNSIGNED NULL,
  `last_Updated_Buildium` DATETIME NULL,
  `last_Updated_QBO` DATETIME NULL,
  PRIMARY KEY (`prop_ID`),
  INDEX `fk_properties_2_idx` (`propClass_ID` ASC),
  INDEX `fk_properties_1_idx` (`lender_ID` ASC),
  INDEX `fk_properties_3_idx` (`loan_Type_ID` ASC),
  INDEX `fk_properties_4_idx` (`deal_Type_ID` ASC),
  CONSTRAINT `fk_properties_1`
    FOREIGN KEY (`lender_ID`)
    REFERENCES `spg-propninja`.`lenders` (`lender_ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_properties_2`
    FOREIGN KEY (`propClass_ID`)
    REFERENCES `spg-propninja`.`property_Classes` (`propClass_ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_properties_3`
    FOREIGN KEY (`loan_Type_ID`)
    REFERENCES `spg-propninja`.`loan_Types` (`loan_Type_ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_properties_4`
    FOREIGN KEY (`deal_Type_ID`)
    REFERENCES `spg-propninja`.`deal_Types` (`deal_Type_ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spg-propninja`.`stages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`stages` (
  `stage_ID` INT NOT NULL AUTO_INCREMENT,
  `ordering_ID` INT UNSIGNED NOT NULL,
  `stage_Name` VARCHAR(45) NULL,
  `hex_Color` CHAR(6) NULL,
  PRIMARY KEY (`stage_ID`),
  UNIQUE INDEX `ordering_ID_UNIQUE` (`ordering_ID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spg-propninja`.`prop_Units`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`prop_Units` (
  `unit_ID` INT NOT NULL AUTO_INCREMENT,
  `unit_sqft` MEDIUMINT(10) UNSIGNED NULL,
  `unit_Name` VARCHAR(255) NULL,
  `rent_Roll` DECIMAL(19,2) NOT NULL,
  `belongs_To_PropID` INT NOT NULL,
  `curr_Stage_ID` INT NOT NULL,
  PRIMARY KEY (`unit_ID`),
  INDEX `fk_prop_Units_1_idx` (`belongs_To_PropID` ASC),
  INDEX `fk_prop_Units_2_idx` (`curr_Stage_ID` ASC),
  CONSTRAINT `fk_prop_Units_1`
    FOREIGN KEY (`belongs_To_PropID`)
    REFERENCES `spg-propninja`.`properties` (`prop_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_prop_Units_2`
    FOREIGN KEY (`curr_Stage_ID`)
    REFERENCES `spg-propninja`.`stages` (`stage_ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spg-propninja`.`checklist_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`checklist_items` (
  `checklist_item_ID` INT NOT NULL AUTO_INCREMENT,
  `checklist_item_ordering_criteria` INT UNSIGNED NOT NULL,
  `checklist_item_name` VARCHAR(255) NULL,
  `belongsTo_Stage_ID` INT NULL,
  PRIMARY KEY (`checklist_item_ID`),
  INDEX `fk_checklist_items_1_idx` (`belongsTo_Stage_ID` ASC),
  UNIQUE INDEX `unique_stageID_and_order` (`checklist_item_ordering_criteria` ASC, `belongsTo_Stage_ID` ASC),
  CONSTRAINT `fk_checklist_items_1`
    FOREIGN KEY (`belongsTo_Stage_ID`)
    REFERENCES `spg-propninja`.`stages` (`stage_ID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spg-propninja`.`checklist_Completion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`checklist_Completion` (
  `checklist_item_ID` INT NULL,
  `belongsTo_prop_ID` INT NULL,
  `isCompleted` TINYINT NULL,
  UNIQUE INDEX `index1` (`checklist_item_ID` ASC, `belongsTo_prop_ID` ASC),
  INDEX `fk_checklist_Completion_2_idx` (`belongsTo_prop_ID` ASC),
  CONSTRAINT `fk_checklist_Completion_1`
    FOREIGN KEY (`belongsTo_prop_ID`)
    REFERENCES `spg-propninja`.`checklist_items` (`checklist_item_ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_checklist_Completion_2`
    FOREIGN KEY (`belongsTo_prop_ID`)
    REFERENCES `spg-propninja`.`properties` (`prop_ID`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB
COMMENT = 'Each property can have units in different stages. Select by stage in checklist_items for properties in a certain stage. Delete all entries for a property at that stage if it is being moved to a different stage to clear the checklist.';


-- -----------------------------------------------------
-- Table `spg-propninja`.`settings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `spg-propninja`.`settings` (
  `buildium_username` INT NULL,
  `buildium_password` VARCHAR(255) NULL,
  `QBO_api_key` VARCHAR(255) NULL,
  `password_hash` VARCHAR(255) NULL,
  `secret_key` VARCHAR(255) NULL)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
