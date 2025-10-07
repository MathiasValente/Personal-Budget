CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY (id),
    CONSTRAINT uk_users_email UNIQUE (email)
);

CREATE TABLE envelopes (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT,
    name TEXT NOT NULL,
    budget REAL NOT NULL,
    CONSTRAINT pk_envelopes PRIMARY KEY (id),
    CONSTRAINT fk_envelopes_users FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE transactions (
    id INT GENERATED ALWAYS AS IDENTITY,
    envelope_id INT,
    date DATE NOT NULL,
    name TEXT NOT NULL,
    amount REAL NOT NULL,
    CONSTRAINT pk_transactions PRIMARY KEY (id),
    CONSTRAINT fk_transactions_envelopes FOREIGN KEY (envelope_id)
        REFERENCES envelopes(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);