DROP TABLE IF EXISTS provinces CASCADE;
CREATE TABLE provinces(
    provinceID INT NOT NULL,
    province_name VARCHAR(50),
    PRIMARY KEY(provinceID)
);

DROP TABLE IF EXISTS pci_data CASCADE;
CREATE TABLE pci_data(
    data_year INT NOT NULL,
    province INT NOT NULL REFERENCES provinces(provinceID),
    ranking INT,
    pci FLOAT(5),
    transparency FLOAT(5),
    time_costs FLOAT(5),
    informal_charges FLOAT(5),
    bias FLOAT(5),
    proactivity FLOAT(5),
    bss FLOAT(5),
    labor_training FLOAT(5),
    law_order FLOAT(5),
    CONSTRAINT province_year PRIMARY KEY(data_year, province)
);
