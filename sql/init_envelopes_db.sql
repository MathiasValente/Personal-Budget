/*
===========================================================
  Envelopes App — Banco de Dados Inicial (psql)
===========================================================

Uso:
  Rode este script a partir da raiz do projeto com:
    \i sql/init_envelopes_db.sql

Objetivo:
  - Criar o banco 'envelopes'
  - Conectar ao banco
  - Criar tabelas: users, envelopes, transactions
  - Popular com dados iniciais

Importante:
  Execute o psql a partir da raiz do projeto para que os caminhos relativos funcionem.

-----------------------------------------------------------
  Etapas
-----------------------------------------------------------
*/

-- 1. Criar o banco
CREATE DATABASE envelopes;

-- 2. Conectar ao banco
\c envelopes

-- 3. Criar tabelas
\i sql/schema.sql

-- 4. Popular com dados iniciais
\i sql/seed.sql