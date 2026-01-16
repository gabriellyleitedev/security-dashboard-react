# Security-Dashboard-React - Arquitetura Front-end com Simulação de Backend

Projeto de um dashboard de segurança inspirado em sistemas reais (MDM, antifurto e monitoramento), desenvolvido com foco em arquitetura, fluxo de dados e simulação de backend no front-end.

Este projeto não é apenas visual: ele foi pensado como um sistema, simulando decisões comuns em aplicações complexas quando ainda não há backend disponível.
Arquitetura Front-end com Simulação de Backend.

---

## Visão Geral do Sistema

O dashboard representa um **painel de controle de segurança**, onde eventos críticos são gerados, persistidos e exibidos em tempo real.
Embora não exista um backend real, toda a lógica foi estruturada como se houvesse:

- Camada de serviço

- Persistência de dados

- Eventos com timestamp

- Reprocessamento de estado ao recarregar a aplicação

O objetivo é treinar **raciocínio de sistema**, não apenas UI.

---

## Arquitetura do Projeto

O projeto segue uma arquitetura simples, porém escalável:

- **Components** → Interface e interação do usuário

- **Services** → Camada de lógica e persistência (simulação de backend)

- **State Management** → Controle de fluxo entre páginas e eventos

- **Storage Layer** → LocalStorage simulando banco de dados

Essa separação permite que, futuramente, o LocalStorage seja substituído facilmente por:

- API REST

- Firebase

- Supabase

- Backend próprio (Node, Java, etc.)

---

## Tecnologias Utilizadas

- **React.js** — construção de componentes e fluxo de aplicação

- **TailwindCSS** — estilização utilitária e responsiva

- **JavaScript (ES6+)** — lógica, datas e controle de estado

- **Vite** — ambiente moderno de build

- **LocalStorage** — simulação de banco de dados no front-end

- **React Hooks** — useState e useEffect aplicados como em sistemas reais

---

## Funcionalidades Principais

- Fluxo de navegação controlado por estado global (Home → Emergency → Dashboard)

- Ativação de modo emergência com evento persistido

- Registro automático de eventos com timestamp real

- Persistência de dados simulando banco de dados

- Cálculo dinâmico de tempo relativo (“Agora”, “X minutos atrás”)

- Reidratação do estado ao recarregar a aplicação

- Interface inspirada em painéis de segurança profissionais

- Layout responsivo e escalável

---

## Simulação de Backend e Banco de Dados

Embora não haja backend real, o projeto simula comportamentos essenciais de sistemas complexos:

- Escrita de eventos como registros (logs)

- Persistência de dados fora do ciclo de renderização

- Leitura e reprocessamento de dados ao iniciar a aplicação

- Organização da lógica em services, evitando acoplamento com a UI

Essa abordagem é comum em:

- Prototipação de sistemas

- MVPs

- Estudos de arquitetura

- Front-ends desacoplados do backend

---

## Aprendizados Técnicos

Durante o desenvolvimento, aprofundei:

- Raciocínio de arquitetura front-end

- Separação de responsabilidades (UI vs lógica)

- Simulação de banco de dados no front

- Modelagem de eventos e logs

- Uso correto de timestamps e datas

- Fluxo de estado entre múltiplas telas

- Escrita de código pensando em futura integração com backend real

---

## Como Executar o Projeto
npm install
npm run dev

A aplicação estará disponível em:

http://localhost:5173

## Possíveis Evoluções (Planejadas)

- Integração com backend real (API REST)

- Autenticação de usuários

- WebSockets para eventos em tempo real

- Banco de dados relacional ou NoSQL

- Controle de múltiplos dispositivos

- Dashboard multi-usuário

## Demo Online

🔗 Demo: (link do Netlify)


## Screenshots
<img width="1919" height="907" alt="image" src="https://github.com/user-attachments/assets/edaae36b-dc9a-4201-9929-d6f1d85f0b7b" />
