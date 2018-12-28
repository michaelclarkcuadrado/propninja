USE `spg-propninja`;

INSERT INTO `spg-propninja`.stages (stage_ID, ordering_ID, stage_Name, hex_Color) VALUES (1, 1, 'Under Contract', '99FFCC');
INSERT INTO `spg-propninja`.stages (stage_ID, ordering_ID, stage_Name, hex_Color) VALUES (2, 2, 'Settlement', 'CCCCCC');
INSERT INTO `spg-propninja`.stages (stage_ID, ordering_ID, stage_Name, hex_Color) VALUES (3, 3, 'Rent Listing', 'CCFF99');
INSERT INTO `spg-propninja`.stages (stage_ID, ordering_ID, stage_Name, hex_Color) VALUES (4, 4, 'Portfolio', 'FFCCFF');
INSERT INTO `spg-propninja`.stages (stage_ID, ordering_ID, stage_Name, hex_Color) VALUES (5, 5, 'Move In', 'FFCC99');

INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (1, '5 Arch');
INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (2, 'ACNB');
INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (3, 'Anchor Loans');
INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (4, 'Carroll Community');
INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (5, 'Chase');
INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (6, 'F & M Trust');
INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (7, 'Fulton Bank');
INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (8, 'Members 1st');
INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (9, 'Mofin');
INSERT INTO `spg-propninja`.lenders (lender_ID, lender_Name) VALUES (10, 'People''s Bank');

INSERT INTO `spg-propninja`.property_Classes (propClass_ID, propClass_Name) VALUES (1, 'SFR');
INSERT INTO `spg-propninja`.property_Classes (propClass_ID, propClass_Name) VALUES (2, '2 Unit');
INSERT INTO `spg-propninja`.property_Classes (propClass_ID, propClass_Name) VALUES (3, '3 Unit');
INSERT INTO `spg-propninja`.property_Classes (propClass_ID, propClass_Name) VALUES (4, 'Multi-Family');
INSERT INTO `spg-propninja`.property_Classes (propClass_ID, propClass_Name) VALUES (5, 'Mixed Use');
INSERT INTO `spg-propninja`.property_Classes (propClass_ID, propClass_Name) VALUES (6, 'Other');

INSERT INTO `spg-propninja`.unit_Types (unit_Type_ID, unit_Type_Name) VALUES (1, 'Apartment');
INSERT INTO `spg-propninja`.unit_Types (unit_Type_ID, unit_Type_Name) VALUES (2, 'Commercial');
INSERT INTO `spg-propninja`.unit_Types (unit_Type_ID, unit_Type_Name) VALUES (3, 'Office');

INSERT INTO `spg-propninja`.property_Types (property_Type_ID, property_Type_Name) VALUES (1, 'Detached');
INSERT INTO `spg-propninja`.property_Types (property_Type_ID, property_Type_Name) VALUES (2, 'Semi-Detached');

INSERT INTO loan_Types (loan_Type_Name) VALUES
("Investor"), ("Bridge"), ("Permanent");

INSERT INTO deal_Types (deal_Type_Name) VALUES
("Flip"), ("Rental");

INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (1, '221B Baker St. London, England', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 8, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 760998.00, 15552.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 2);
INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (2, '221B Baker St. London, England', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 4, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 446574.00, 840450.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 2);
INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (3, '221B Baker St. London, England', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 7, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 949877.00, 155592.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 2);
INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (4, '221B Baker St. London, England', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 1, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 409660.00, 256610.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 2);
INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (5, '221B Baker St. London, England', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 4, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 198669.00, 816277.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 1);
INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (6, '1600 Pennsylvania Ave, Washington, D.C.', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 5, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 764369.00, 311552.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 1);
INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (7, '221B Baker St. London, England', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 6, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 225835.00, 108932.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 1);
INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (8, '221B Baker St. London, England', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 2, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 836070.00, 610006.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 2);
INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (9, '221B Baker St. London, England', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 3, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 502845.00, 723231.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 2);
INSERT INTO `spg-propninja`.properties (prop_ID, prop_address, purchase_Date, purchase_Price, deal_Type_ID, `Owning Entity`, propClass_ID, gross_sqft, year_Built, tax_Assessment, yearly_Tax, yearly_Insurance, refinance_Date, lender_ID, loan_Type_ID, loan_Acct_Number, loan_Payment_Day, monthly_Loan_Payment_Total, monthly_Loan_Payment_Interest, monthly_Loan_Payment_Principal, current_Debt, current_Value, last_Updated_Buildium, last_Updated_QBO, property_Type_ID) VALUES (10, '300 N. Washington St. Gettysburg, PA', '2018-12-24', 250000.25, 1, 'SPG Capital.', 2, 50000.00, 1890, 75000.18, 25000.75, 16000.16, '2018-12-24', 9, 1, '3215151', 29, 12345.00, 1600.00, 1520.00, 6013.00, 786139.00, '2018-12-27 00:00:00', '2018-12-27 00:00:00', 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (1, 500, 'Apt. A', 850.00, 3, 1, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (2, 600, 'Apt. B', 900.00, 3, 1, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (3, 700, 'Apt. C', 1200.00, 3, 2, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (4, 700, 'Apt. C', 1200.00, 4, 2, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (5, 700, 'Apt. C', 1200.00, 5, 2, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (6, 879, 'asdkfj', 1579.86, 4, 1, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (7, 973, 'asdkfj', 1445.99, 9, 3, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (8, 802, 'asdkfj', 1476.41, 4, 5, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (9, 944, 'asdkfj', 742.80, 2, 1, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (10, 922, 'asdkfj', 774.71, 3, 4, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (11, 390, 'asdkfj', 1109.32, 4, 4, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (12, 266, 'asdkfj', 1238.80, 10, 3, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (13, 842, 'asdkfj', 539.61, 9, 1, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (14, 301, 'asdkfj', 2353.72, 7, 2, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (15, 1032, 'asdkfj', 888.77, 4, 4, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (16, 213, 'asdkfj', 1793.76, 5, 1, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (17, 892, 'asdkfj', 649.60, 1, 4, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (18, 1150, 'asdkfj', 1130.82, 7, 1, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (19, 825, 'asdkfj', 740.58, 5, 3, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (20, 832, 'asdkfj', 1994.03, 6, 2, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (21, 1028, 'asdkfj', 1306.94, 4, 3, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (22, 253, 'asdkfj', 2274.96, 6, 1, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (23, 642, 'asdkfj', 1764.16, 4, 5, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (24, 625, 'asdkfj', 2279.34, 8, 4, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (25, 1031, 'asdkfj', 2249.03, 8, 4, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (26, 1011, 'asdkfj', 2150.14, 6, 5, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (27, 1459, 'asdkfj', 700.68, 9, 4, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (28, 739, 'asdkfj', 1791.27, 3, 1, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (29, 1126, 'asdkfj', 1023.64, 5, 1, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (30, 1011, 'asdkfj', 1566.74, 1, 3, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (31, 505, 'asdkfj', 1903.76, 1, 1, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (32, 1393, 'asdkfj', 1474.73, 10, 1, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (33, 861, 'asdkfj', 1104.53, 3, 1, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (34, 1409, 'asdkfj', 923.18, 6, 5, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (35, 880, 'asdkfj', 724.40, 3, 4, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (36, 1403, 'asdkfj', 1258.54, 4, 3, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (37, 1177, 'asdkfj', 469.82, 10, 3, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (38, 1168, 'asdkfj', 830.34, 9, 3, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (39, 631, 'asdkfj', 2279.87, 8, 4, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (40, 698, 'asdkfj', 2034.97, 10, 2, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (41, 687, 'asdkfj', 720.29, 7, 5, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (42, 832, 'asdkfj', 1840.76, 2, 3, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (43, 631, 'asdkfj', 403.09, 1, 1, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (44, 565, 'asdkfj', 817.84, 3, 2, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (45, 633, 'asdkfj', 1396.26, 5, 5, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (46, 657, 'asdkfj', 2119.68, 3, 4, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (47, 817, 'asdkfj', 1297.83, 9, 4, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (48, 603, 'asdkfj', 977.29, 6, 4, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (49, 1423, 'asdkfj', 1625.99, 3, 2, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (50, 443, 'asdkfj', 1966.73, 4, 3, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (51, 250, 'asdkfj', 2266.43, 6, 5, 1);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (52, 288, 'asdkfj', 1423.53, 4, 2, 2);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (53, 358, 'asdkfj', 2191.21, 2, 5, 3);
INSERT INTO `spg-propninja`.prop_Units (unit_ID, unit_sqft, unit_Name, rent_Roll, belongs_To_PropID, curr_Stage_ID, unit_Type_ID) VALUES (54, 262, 'asdkfj', 1614.64, 9, 4, 2);