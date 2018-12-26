USE spg-propninja;

INSERT INTO `spg-propninja`.`stages`
(`ordering_ID`,
`stage_Name`,
`hex_color`)
VALUES
(0, "Renovating", "FF00FF"),
(1, "Listed", "435234"),
(2, "Leased", "0000FF");

INSERT INTO `spg-propninja`.`lenders`
(`lender_Name`)
VALUES
("LenderMart"), ("Acme Savings and Loan"), ("Big Bank"), ("Ca$h Money");

INSERT INTO `spg-propninja`.`property_Classes`
(`propClass_Name`)
VALUES
("One Unit"), ("Two Unit"), ("Duplex"), ("High-rise");

