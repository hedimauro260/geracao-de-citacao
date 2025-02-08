Aqui está uma versão aprimorada do seu README, com mais detalhes e melhor organização:  

---

# 🎨 Gerador de Citações Aleatórias  

Um aplicativo que gera citações inspiradoras com base no estado de espírito escolhido pelo usuário. Desenvolvido com **React (TypeScript)** no frontend e **Node.js + Express + Prisma + MongoDB** no backend.  

## 📌 Índice  
- [📖 Visão Geral](#-visão-geral)  
- [🚀 Funcionalidades](#-funcionalidades)  
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)  
- [💻 Como Executar o Projeto](#-como-executar-o-projeto)  
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)  
- [📑 Documentação](#-documentação)  
- [🤝 Contribuição](#-contribuição)  
- [📝 Licença](#-licença)  

## 📖 Visão Geral  
Este projeto permite que os usuários escolham seu estado de espírito e recebam uma citação inspiradora correspondente.  

- **Frontend**: Criado com **React + TypeScript**, oferecendo uma interface moderna e responsiva.  
- **Backend**: Desenvolvido com **Node.js + Express**, utilizando **Prisma** para gerenciar dados no **MongoDB**.  

## 🚀 Funcionalidades  
✅ Escolha de estado de espírito (Motivado, Reflexivo, Filosófico).  
✅ Geração de citações aleatórias baseadas no estado selecionado.  
✅ Salvamento de citações favoritas.  
✅ Compartilhamento de citações em redes sociais.  
✅ Explicação das citações usando IA.  

## 📂 Estrutura do Projeto  
```
/gerador-de-citacoes
├── /frontend       # Interface do usuário (React + Vite + TypeScript)
│   ├── src
│   ├── public
│   ├── README.md   # Documentação específica do frontend
│   └── package.json
│
├── /backend        # API e banco de dados (Node.js + Express + Prisma + MongoDB)
│   ├── src
│   ├── prisma
│   ├── README.md   # Documentação específica do backend
│   └── package.json
│
└── README.md       # Documentação principal
```  

## 💻 Como Executar o Projeto  
1. **Clone o repositório:**  
   ```bash
   git clone https://github.com/seu-usuario/gerador-de-citacoes.git
   cd gerador-de-citacoes
   ```  

2. **Configurar e iniciar o backend:**  
   ```bash
   cd backend
   npm install
   npm run dev
   ```  

3. **Configurar e iniciar o frontend:**  
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```  

4. **Acesse a aplicação:**  
   - O frontend rodará em `http://localhost:5173` (ou outra porta definida pelo Vite).  
   - O backend rodará em `http://localhost:3000` (ou a porta definida no código).  

## 🛠 Tecnologias Utilizadas  
### **Frontend**  
- React + Vite  
- TypeScript  
- Styled Components ou CSS Modules  
- React Router  
- Axios  

### **Backend**  
- Node.js + Express  
- Prisma ORM  
- MongoDB  
- JWT para autenticação  
- Cors & Dotenv  

## 📑 Documentação  
- [Frontend](/frontend/README.md)  
- [Backend](/backend/README.md)  

## 🤝 Contribuição  
Sinta-se à vontade para contribuir! Para isso:  
1. Faça um fork do repositório.  
2. Crie uma nova branch para suas mudanças:  
   ```bash
   git checkout -b feature/minha-mudanca
   ```  
3. Commit suas alterações:  
   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```  
4. Envie suas mudanças para o repositório remoto:  
   ```bash
   git push origin feature/minha-mudanca
   ```  
5. Abra um Pull Request e descreva suas alterações.  

## 📝 Licença  
Este projeto está licenciado sob a **MIT License**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.  

---
