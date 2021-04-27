DROP TABLE IF EXISTS UserCredentials CASCADE;
DROP TABLE IF EXISTS ClientInformation CASCADE;
DROP TABLE IF EXISTS FuelQuote CASCADE;
CREATE EXTENSION pgcrypto;


CREATE TABLE UserCredentials(
	userID SERIAL NOT NULL UNIQUE,
	loginID TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	PRIMARY KEY(userID),
	CONSTRAINT "ClientInformation_userID_fkey" FOREIGN KEY (userID) REFERENCES UserCredentials(userID) ON DELETE CASCADE
);

CREATE TABLE ClientInformation(
	userID SERIAL NOT NULL,
	fullName TEXT NOT NULL,
	address TEXT NOT NULL,
	address2 TEXT,
	city char(20) NOT NULL,
	state char(20) NOT NULL,
	zip varchar(5) NOT NULL,
	CONSTRAINT "ClientInformation_userID_fkey" FOREIGN KEY (userID) REFERENCES UserCredentials(userID) ON DELETE CASCADE
);

CREATE TABLE FuelQuote(
	fuelID SERIAL NOT NULL,
	gallonReq integer NOT NULL,
	deliveryAdd TEXT NOT NULL,
	deliveryDate DATE NOT NULL,
	total integer NOT NULL,
	PRIMARY KEY(fuelID)
);
