# Larissa Araujo Psicologia

Landing page institucional para divulgação do trabalho da psicóloga Larissa Araujo. O site apresenta uma proposta de atendimento psicológico humanizado, informações sobre o serviço, depoimentos, perguntas frequentes e um canal para agendamento de sessões.

## Funcionalidades

- Página inicial com apresentação do atendimento psicológico;
- Seções sobre a profissional e o público atendido;
- Explicação de como funciona o atendimento;
- Depoimentos de pacientes;
- Seção de perguntas frequentes;
- Navegação por âncoras entre as seções;
- Botão de contato para agendamento pelo WhatsApp;
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript
- HTML5
- CSS3

## Como executar o projeto

### Pré-requisitos

É necessário ter o [Node.js](https://nodejs.org/) instalado.

### Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/SEU_USUARIO/larissa-araujo.git
cd larissa-araujo
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O endereço local será exibido no terminal, normalmente `http://localhost:5173`.

## Outros comandos

Gerar a versão de produção:

```bash
npm run build
```

Visualizar a versão de produção localmente:

```bash
npm run preview
```

Verificar o código com ESLint:

```bash
npm run lint
```

## Estrutura principal

```text
src/
├── components/     # Componentes das seções da página
├── App.jsx         # Composição principal da página
├── App.css         # Estilos da aplicação
└── index.css       # Estilos globais

public/
├── img/            # Imagens utilizadas no site
└── favicon_io/     # Ícones e arquivos do favicon
```

## Configuração do WhatsApp

Antes de publicar o site, substitua `SEUNUMEROAQUI` pelo número de WhatsApp correto no link localizado em `src/components/Hero.jsx`.

Use o número no formato internacional, com código do país e DDD, sem espaços, sinais ou parênteses.

## Créditos

Desenvolvido por **Raphael S. Dorta** para **Larissa Araujo Psicologia**.
