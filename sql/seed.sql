-- Inserting users
INSERT INTO users (name, email, password) VALUES
  ('Mathias Silva', 'mathias@example.com', 'senha123'),
  ('Ana Costa', 'ana@example.com', 'segura456');

-- Inserting envelopes
INSERT INTO envelopes (user_id, name, budget) VALUES
  (1, 'Alimentação', 1200.00),
  (1, 'Transporte', 300.00),
  (2, 'Educação', 800.00);