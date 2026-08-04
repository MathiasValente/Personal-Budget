# Personal Budget API

API REST para gerenciamento de envelopes financeiros e transações, construída com Node.js, Express e PostgreSQL.

O projeto foi pensado para controlar orçamentos por categoria (envelopes) e registrar movimentações financeiras associadas a esses envelopes.

## ✨ Funcionalidades

- Listagem de todos os envelopes
- Busca de um envelope por ID
- Criação de novos envelopes
- Atualização de envelopes existentes
- Exclusão de envelopes
- Listagem de todas as transações
- Busca de uma transação por ID
- Criação, atualização e remoção de transações
- Validação automática de campos obrigatórios antes da inserção

## 🛠️ Tecnologias

- Node.js
- Express
- PostgreSQL
- pg
- dotenv

## 📁 Estrutura do projeto

- `app.js` — inicializa a aplicação Express
- `routes/` — definição das rotas da API
- `services/` — camada de serviço para acesso às operações de negócio
- `db/` — conexão com o banco de dados
- `sql/` — scripts de schema e seed do PostgreSQL
- `middlewares/` — middlewares de validação
- `utils/` — utilidades auxiliares para processamento de payloads

## ✅ Requisitos

Antes de rodar o projeto, certifique-se de que você possui:

- Node.js instalado
- PostgreSQL configurado e acessível
- Um banco de dados criado para a aplicação

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd Personal-Budget
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente para a conexão com o PostgreSQL.
   O projeto usa `dotenv` e o cliente `pg`, então o ambiente deve disponibilizar as variáveis padrões do PostgreSQL, como por exemplo:

```env
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=sua_senha
PGDATABASE=personal_budget
PORT=3000
```

4. Crie o banco e execute os scripts SQL de estrutura e dados iniciais:

```bash
psql -U postgres -d personal_budget -f sql/schema.sql
psql -U postgres -d personal_budget -f sql/seed.sql
```

5. Inicie a aplicação:

```bash
npm start
```

A API ficará disponível em:

```text
http://localhost:3000
```

## 📚 Endpoints

### Envelopes

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/envelopes` | Lista todos os envelopes |
| GET | `/envelopes/:id` | Busca um envelope por ID |
| POST | `/envelopes` | Cria um novo envelope |
| PATCH | `/envelopes/:id` | Atualiza um envelope |
| DELETE | `/envelopes/:id` | Remove um envelope |

### Transactions

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/transactions` | Lista todas as transações |
| GET | `/transactions/:id` | Busca uma transação por ID |
| POST | `/transactions` | Cria uma nova transação |
| PATCH | `/transactions/:id` | Atualiza uma transação |
| DELETE | `/transactions/:id` | Remove uma transação |

## 🧪 Exemplos de requisições

### Criar um envelope

```bash
curl -X POST http://localhost:3000/envelopes \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "user_id": 1,
    "name": "Alimentação",
    "budget": 1200.00
  }'
```

### Listar envelopes

```bash
curl http://localhost:3000/envelopes
```

### Criar uma transação

```bash
curl -X POST http://localhost:3000/transactions \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "envelope_id": 1,
    "date": "2026-08-04",
    "name": "Supermercado",
    "amount": 245.50
  }'
```

## 🗄️ Modelo de dados

A estrutura principal do banco é composta por:

- `users`
- `envelopes`
- `transactions`

A relação principal segue o fluxo:

- `users` → `envelopes`
- `envelopes` → `transactions`

Os scripts SQL em `sql/schema.sql` e `sql/seed.sql` definem a estrutura inicial e alguns dados de exemplo para uso local.

## ⚠️ Observações

- A API ainda não implementa autenticação de usuários.
- A validação de campos obrigatórios é feita automaticamente com base nas colunas da tabela.
- O projeto foi estruturado em camadas, facilitando expansão para regras de negócio mais complexas.

## 📌 Contribuição

Sinta-se à vontade para abrir issues, propor melhorias ou enviar pull requests.
