# 🚀 Backend do Gerador de Citações Aleatórias

Este é o backend do projeto **Gerador de Citações Aleatórias**, desenvolvido com **Node.js**, **Express**, **Prisma** e **MongoDB**. Ele fornece uma API para gerenciar usuários, citações e favoritos.

---

## 📌 Índice
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [💻 Como Configurar e Executar](#-como-configurar-e-executar)
- [📡 Rotas da API](#-rotas-da-api)
- [🧪 Testes no Postman](#-testes-no-postman)
- [🤝 Contribuição](#-contribuição)
- [📜 Licença](#-licença)

---

## 🛠 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para construção de APIs.
- **Prisma**: ORM para gerenciamento do banco de dados.
- **MongoDB**: Banco de dados NoSQL.
- **JWT**: Autenticação baseada em tokens.
- **Bcrypt**: Criptografia de senhas.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

---

## 📂 Estrutura do Projeto
```
/backend
├── /node_modules      # Dependências instaladas
├── /prisma            # Configuração do Prisma
│   ├── schema.prisma  # Modelos do banco de dados
│   └── migrations     # Migrações do banco de dados
├── /src               # Código-fonte do backend
│   ├── /controllers   # Lógica dos endpoints
│   ├── /routes        # Definição das rotas
│   ├── /middlewares   # Middlewares (ex: autenticação)
│   ├── /utils         # Funções utilitárias
│   └── server.js      # Ponto de entrada do servidor
├── .env               # Variáveis de ambiente
├── .gitignore         # Arquivos e pastas ignorados pelo Git
├── package.json       # Dependências e scripts do projeto
└── README.md          # Documentação do backend
```

---

## 💻 Como Configurar e Executar

### **Pré-requisitos**
- Node.js (v18 ou superior)
- MongoDB (local ou Atlas)

### **Passos**
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/gerador-de-citacoes.git
   cd backend
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure o arquivo `.env`:`**
   ```env
   DATABASE_URL="mongodb+srv://usuario:senha@cluster0.mongodb.net/nome-do-banco?retryWrites=true&w=majority"
   JWT_SECRET="sua_chave_secreta_jwt"
   ```
4. **Execute as migrações do Prisma:**
   ```bash
   npx prisma migrate dev
   ```
5. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
6. **Acesse a API em:**
   ```
   http://localhost:5000
   ```

---

## 📡 Rotas da API

### **Autenticação**
#### **Cadastrar Usuário**
- **POST** `/api/auth/signup`
```json
{
  "username": "usuario1",
  "email": "usuario1@example.com",
  "password": "senha123"
}
```

#### **Login**
- **POST** `/api/auth/login`
```json
{
  "email": "usuario1@example.com",
  "password": "senha123"
}
```

### **Citações**
#### **Criar uma nova citação**
- **POST** `/api/quotes`
```json
{
  "text": "A persistência é o caminho do êxito.",
  "author": "Charles Chaplin",
  "mood": "Motivado",
  "userId": "<id_do_usuario>",
  "isAdmin": false
}
```

#### **Listar citações por estado de espírito**
- **GET** `/api/quotes?mood=Motivado`

### **Favoritos**
#### **Adicionar uma citação aos favoritos**
- **POST** `/api/quotes/:quoteId/favorite`
```json
{
  "userId": "<id_do_usuario>"
}
```

#### **Listar favoritos de um usuário**
- **GET** `/api/quotes/favorites/:userId`

---

## 🧪 Testes no Postman
1. **Importe a coleção do Postman** (disponível no repositório).
2. **Configure as variáveis de ambiente no Postman:**
   - `base_url`: `http://localhost:5000`
   - `token`: Token JWT retornado no login.
3. **Execute os testes para verificar o funcionamento das rotas.**

---

## 🤝 Contribuição
Contribuições são bem-vindas! Siga os passos abaixo:

1. **Faça um fork do projeto**.
2. **Crie uma branch para sua feature**:
   ```bash
   git checkout -b feature/nova-feature
   ```
3. **Commit suas mudanças**:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. **Push para a branch**:
   ```bash
   git push origin feature/nova-feature
   ```
5. **Abra um Pull Request**.

---

## 📜 Licença
Este projeto está licenciado sob a **MIT License**.

---
