# 1️⃣ Primeiro projeto

## 🩺 [Calculadora de IMC com React](https://github.com/Sofia-Magalhaes/react-projects/tree/main/calculadora-imc/imc_calc)

Uma aplicação web simples e responsiva para calcular o Índice de Massa Corporal (IMC).  
Desenvolvida com **React**, a aplicação permite que o usuário insira sua altura e peso para obter instantaneamente o resultado do IMC e a sua classificação de acordo com a tabela padrão.

---

## ✨ Funcionalidades

- **Cálculo do IMC**: Insira sua altura e peso para calcular o IMC de forma precisa.
- **Validação de Input**: Os campos de entrada aceitam apenas valores numéricos e vírgulas, garantindo que o cálculo seja feito com dados válidos.
- **Interface Dinâmica**: Alterna de forma inteligente entre o formulário de entrada e a tela de resultados, exibindo a tabela de IMC apenas após o cálculo.
- **Classificação do IMC**: Apresenta a categoria do seu IMC (como "Normal", "Sobrepeso" ou "Obesidade") e destaca a sua situação na tabela.
- **Controle de Estado**: Utiliza `useState` para gerenciar valores dos inputs e resultado do cálculo.

---

## 💻 Tecnologias

- **React** — Biblioteca JavaScript para construção da interface de usuário.
- **Vite** — Ferramenta de build moderna e rápida para iniciar o projeto.
- **JavaScript** — Lógica da aplicação e cálculo do IMC.
- **CSS** — Estilização para uma interface limpa e intuitiva.

---

## ⚙️ Projeto Funcionando
https://github.com/user-attachments/assets/cd47c343-b385-4aa9-a291-5dce7c589681

---

# 2️⃣ Segundo projeto

## 📋 [Formulário em React](https://github.com/Sofia-Magalhaes/react-projects/tree/main/formulario/form)

Um simples formulário criado com **React** para demonstração de **inputs controlados**, incluindo campos de texto, textarea e select. O projeto mostra como manipular estado e lidar com envio de dados no React.

## 🚀 Funcionalidades

- Campo de texto para **nome**  
- Campo de texto para **e-mail**  
- Campo de **textarea** para biografia  
- **Select** para escolher função do usuário (Usuário, Editor, Admin)  
- Reset automático do formulário após envio  
- Uso de **props** para valores iniciais (nome e e-mail)  
- Estilização simples com CSS

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- CSS

## ⚙️ Projeto Funcionando
https://github.com/user-attachments/assets/eaff9aab-a516-410a-841c-3e532b1827be

---

# 3️⃣ Terceiro projeto

## [Tela de Login](https://github.com/Sofia-Magalhaes/react-projects/tree/main/tela-login)

Este projeto implementa uma **tela de login moderna e responsiva** utilizando **React** e **CSS** com efeitos de *glassmorphism*.  
Ele serve como base para sistemas que necessitam de autenticação de usuário.

---

## 📌 Tecnologias utilizadas
- **React.js** — Biblioteca JavaScript para criação de interfaces.
- **React Icons** — Ícones prontos para uso.
- **CSS** — Estilização personalizada com efeitos de vidro (*glass effect*).
- **JavaScript (ES6+)** — Para manipulação de estado e eventos.

---

## 🚀 Como funciona

### 1️⃣ **Componente App**
O `App.jsx` é o ponto de entrada visual da aplicação.  
Ele apenas renderiza o componente **Login** centralizado na tela e aplica o estilo de fundo definido no `App.css`.

### 2️⃣ **Componente Login**
O `Login.jsx` contém:
- **Estados (`useState`)** para armazenar email e senha.
- **Formulário de login** com campos:
  - E-mail (com ícone `FaUser`)
  - Senha (com ícone `FaLock`)
  - Checkbox "Lembre de mim"
  - Link "Esqueceu a senha?"
  - Botão "Entrar"
- **Evento `onSubmit`** que:
  - Previne o recarregamento da página.
  - Exibe um `alert` com os dados digitados (apenas para teste).

### 3️⃣ **Estilização**
O `Login.css` cria um efeito de vidro com:
- Fundo translúcido.
- Bordas arredondadas.
- Desfoque no fundo (`backdrop-filter`).
- Ícones posicionados dentro dos campos.
- Layout centralizado e responsivo.

O `App.css` define:
- Reset básico de estilos.
- Fundo com imagem (`bg.webp`) ocupando toda a tela.

---

## ⚙️ Projeto Funcionando
https://github.com/user-attachments/assets/5a6cb69a-017d-40ee-b27f-3236fc539db8

---

# 4️⃣ Quarto projeto

## [Formulário multi step com React JS](https://github.com/Sofia-Magalhaes/react-projects/tree/main/form-multi-step/multistep_form_react)

---

## 📌 Sobre o Projeto
Este projeto implementa um **formulário de múltiplas etapas** (*multi-step form*) utilizando **React**.  
O objetivo é tornar a coleta de dados mais organizada e agradável, dividindo um formulário longo em partes menores e mais fáceis de preencher.

## 🎯 Objetivo
- Melhorar a **experiência do usuário**, evitando formulários longos em uma única página.
- Dividir a entrada de dados em **etapas lógicas** (ex.: informações pessoais → endereço → confirmação).
- Validar as informações **por etapa**, garantindo que cada seção esteja correta antes de avançar.
- Criar **componentes reutilizáveis** que podem ser usados em outros projetos.

## ⚙️ Funcionamento
1. **Gerenciamento de estado centralizado**  
   Os dados de todas as etapas são armazenados em um estado global (via `useState` ou `useReducer`).

2. **Navegação entre etapas**  
   Botões "Próximo" e "Anterior" controlam o avanço ou retrocesso do usuário.

3. **Componentes separados por etapa**  
   Cada etapa do formulário (ex.: `Step1`, `Step2`, `Step3`) é um componente independente.

4. **Validação condicional**  
   Antes de avançar, os campos da etapa atual podem ser validados.

5. **Renderização condicional**  
   Apenas o componente da etapa atual é exibido na tela.

6. **Envio final**  
   Na última etapa, todos os dados são consolidados e enviados (para API, log, etc.).

---

## ⚙️ Projeto Funcionando
https://github.com/user-attachments/assets/6bc276ba-5aba-4a60-a1bf-da146e2b6163



