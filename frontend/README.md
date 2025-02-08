Aqui está uma versão aprimorada do README do frontend, com mais detalhes e melhor organização:  

---

# 🎨 Frontend do Gerador de Citações Aleatórias  

O frontend do projeto é desenvolvido com **React** e **TypeScript**, utilizando **CSS Modules** para estilização. Ele é responsável pela interface do usuário e pela interação com o backend.  

## 📌 Índice  
- [🚀 Funcionalidades](#-funcionalidades)  
- [🛠 Tecnologias Utilizadas](#-tecnologias-utilizadas)  
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)  
- [💻 Como Executar o Frontend](#-como-executar-o-frontend)  
- [🖥️ Página Inicial](#-página-inicial)  
- [📌 Páginas Futuras](#-páginas-futuras)  
- [🤝 Contribuição](#-contribuição)  

## 🚀 Funcionalidades  
✅ Escolha de estado de espírito (Motivado, Reflexivo, Filosófico).  
✅ Geração de citações aleatórias com base no estado escolhido.  
✅ Salvamento de citações favoritas.  
✅ Compartilhamento de citações em redes sociais.  
✅ Explicação das citações usando IA.  

## 🛠 Tecnologias Utilizadas  
### **Principais**  
- **React**: Biblioteca para construção da interface do usuário.  
- **TypeScript**: Tipagem estática para maior segurança no desenvolvimento.  
- **CSS Modules**: Estilização modular para evitar conflitos de classes.  
- **Vite**: Ferramenta de build rápida para projetos React.  

### **Outras Bibliotecas**  
- **React Icons**: Ícones otimizados para React.  
- **React Router**: Gerenciamento de rotas para navegação entre páginas.  
- **Axios**: Requisições HTTP para comunicação com o backend.  

## 📂 Estrutura do Projeto  
```
/frontend
├── /public        # Arquivos estáticos (favicon, imagens, etc.)
├── /src           # Código-fonte principal
│   ├── /components # Componentes reutilizáveis
│   ├── /pages      # Páginas da aplicação
│   ├── /styles     # Estilos globais e por componente
│   ├── App.tsx     # Componente principal
│   └── index.tsx   # Ponto de entrada do React
└── README.md       # Documentação do frontend
```  

## 💻 Como Executar o Frontend  

### **Pré-requisitos**  
- Node.js (v18 ou superior)  
- Gerenciador de pacotes (`npm` ou `yarn`)  

### **Passos**  
1. **Navegue até a pasta do frontend:**  
   ```bash
   cd frontend
   ```  
2. **Instale as dependências:**  
   ```bash
   npm install
   ```  
3. **Execute o servidor de desenvolvimento:**  
   ```bash
   npm run dev
   ```  
4. **Acesse o projeto em:**  
   ```
   http://localhost:5173
   ```  

## 🖥️ Página Inicial  
A página inicial contém:  
- **Um seletor de estado de espírito**: O usuário escolhe entre "Motivado", "Reflexivo" ou "Filosófico".  
- **Um cartão com a citação gerada**: Exibe a citação de acordo com o estado selecionado.  
- **Botões de ação**:  
  - Salvar citação favorita  
  - Compartilhar nas redes sociais  
  - Obter explicação sobre a citação  
- **Lista de citações favoritas**: Permite ao usuário visualizar as citações que ele salvou.  

### **Componentes principais**  
- **`Header`**: Barra de navegação com links para as páginas principais.  
- **`Footer`**: Rodapé com links úteis (Sobre Nós, Contato, Política de Privacidade).  
- **`QuoteCard`**: Exibe a citação gerada e suas ações (salvar, compartilhar, explicar).  
- **`FavoriteQuotes`**: Lista de citações salvas pelo usuário.  

## 📌 Páginas Futuras  
- **Estados**: Exibição de citações com base no estado de espírito escolhido.  
- **Top Citações**: Lista com as citações mais curtidas e compartilhadas.  
- **Citação do Dia**: Uma citação especial exibida diariamente.  

## 🤝 Contribuição  
Para contribuir com o frontend, siga as diretrizes do [README principal](../README.md).  

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
