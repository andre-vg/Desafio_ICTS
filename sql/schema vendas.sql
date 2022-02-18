-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema vendas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vendas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vendas` DEFAULT CHARACTER SET latin1 ;
USE `vendas` ;

-- -----------------------------------------------------
-- Table `vendas`.`tb_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vendas`.`tb_produto` (
  `id_produto` INT(11) NOT NULL AUTO_INCREMENT,
  `nme_produto` VARCHAR(500) NOT NULL,
  `dsc_produto` VARCHAR(2000) NOT NULL,
  `preco_produto` DECIMAL(10,2) NOT NULL,
  `dta_cad_produto` DATETIME NOT NULL,
  `dta_mod_produto` DATETIME NOT NULL,
  PRIMARY KEY (`id_produto`))
ENGINE = InnoDB
AUTO_INCREMENT = 32
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vendas`.`tb_compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vendas`.`tb_compra` (
  `id_compra` INT(11) NOT NULL AUTO_INCREMENT,
  `total` DOUBLE NOT NULL,
  `dta_cad_compra` DATE NOT NULL,
  `tipo_pagamento` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_compra`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `vendas`.`ta_compra_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vendas`.`ta_compra_produto` (
  `cod_compra` INT(11) NOT NULL,
  `cod_produto` INT(11) NOT NULL,
  `qtd_produto` INT(11) NOT NULL,
  PRIMARY KEY (`cod_compra`, `cod_produto`),
  CONSTRAINT `fk_tb_compra_has_table2_table21`
    FOREIGN KEY (`cod_produto`)
    REFERENCES `vendas`.`tb_produto` (`id_produto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_compra_has_table2_tb_compra`
    FOREIGN KEY (`cod_compra`)
    REFERENCES `vendas`.`tb_compra` (`id_compra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;




SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
