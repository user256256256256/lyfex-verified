CREATE TABLE payments_intiated (
    id INT IDENTITY(1,1) PRIMARY KEY,   -- A unique identifier for each record, auto-incremented
    paymentDate DATE NOT NULL,          -- Date of payment
    name NVARCHAR(255) NOT NULL,        -- Name of the person making the payment
    price DECIMAL(10, 2) NOT NULL,      -- Price of the service, with up to 10 digits and 2 decimal places
    currency CHAR(3) NOT NULL,          -- Currency code (e.g., USD, EUR)
    serviceName NVARCHAR(255) NOT NULL, -- Name of the service
    email NVARCHAR(255) NOT NULL,       -- Email address of the person
    mobileNo NVARCHAR(20) NOT NULL,     -- Mobile number (adjust length if needed)
    message NVARCHAR(MAX)               -- Additional message (can be left empty)
);

CREATE TABLE transactions_successful (
    id INT IDENTITY(1,1) PRIMARY KEY,   -- A unique identifier for each record, auto-incremented
    transactionID NVARCHAR(255) NOT NULL,  -- Transaction ID
    amount DECIMAL(10, 2) NOT NULL,        -- Amount of the transaction, with up to 10 digits and 2 decimal places
    refno NVARCHAR(255) NOT NULL,          -- Reference number
    narration NVARCHAR(MAX),               -- Additional information or narration (can be left empty)
    dateApproved DATETIME,                 -- Date and time when the transaction was approved
    paymentDate DATE,                      -- Date of the payment
    name NVARCHAR(255),                   -- Name of the person or entity involved
    price DECIMAL(10, 2),                  -- Price with up to 10 digits and 2 decimal places
    currency CHAR(3),                     -- Currency code (e.g., USD, EUR)
    serviceName NVARCHAR(255),             -- Name of the service
    email NVARCHAR(255),                  -- Email address
    mobileNo NVARCHAR(20),                -- Mobile number (adjust length if needed)
    message NVARCHAR(MAX)                 -- Additional message related to the transaction (can be left empty)
);
