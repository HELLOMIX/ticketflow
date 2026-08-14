# TicketFlow

Plataforma de eventos e ingressos, organizador publica eventos (a partir de um catálogo
externo ou manualmente), cliente reserva assento/ingresso, paga de forma simulada e recebe
um ingresso com QR code; a portaria valida a entrada.

Projeto feito para o **Desafio Elite Dev**.

**Deploy:**

- Frontend: https://ticketflow-mocha.vercel.app
- Backend: https://ticketflow-api-tg44.onrender.com

> O backend está no plano gratuito do Render, que entra em repouso após mais ou menos 15 minutos sem tráfego.
> A primeira requisição depois disso pode levar de 30s a 50s para responder enquanto o serviço
> acorda, não é bug, é limitação do tier gratuito.

## Stack

- **Backend**: Node.js + TypeScript, Express 5, Prisma 7 (SQLite via `@prisma/adapter-better-sqlite3`), JWT + bcrypt, Zod
- **Frontend**: React 19 + Vite, TypeScript, Tailwind CSS, Axios, `qrcode.react`, `html5-qrcode`
- **Integração externa**: TMDb (catálogo de filmes, com busca)

## Estrutura

```bash
ticketflow/
├── apps/
│ ├── api/ # backend — Express + Prisma
│ └── web/ # frontend — React + Vite
├── docker-compose.yml
└── README.md
```

Backend organizado por domínio em `apps/api/src/modules/` (auth, events, seats, checkout,
tickets, gate, external-catalog). Frontend organizado por domínio em `apps/web/src/features/`
(auth, events, seat-map, checkout, my-tickets, organizer, gate).

## Como rodar localmente (sem Docker)

### Pré-requisitos (Windows)

O backend usa `better-sqlite3`, que exige compilação nativa. Se o `npm install` falhar
com erro relacionado a `node-gyp`/`Visual Studio`, instale o
[Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
com o workload **"Desktop development with C++"**, feche e reabra o terminal, e rode
`npm install` novamente.

### 1. Backend

```bash
cd apps/api
npm install
cp .env.example .env
```

Preenche o `.env`:

```bash
PORT=4000
DATABASE_URL="file:./dev.db"
JWT_SECRET=<gere com: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))">
TMDB_BEARER_TOKEN=<seu token de leitura da API do TMDb>
QR_SIGNING_SECRET=<gere outro valor da mesma forma, diferente do JWT_SECRET>

```

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed
npm run dev
```

API disponível em `http://localhost:4000`.

### 2. Frontend

```bash
cd apps/web
npm install
cp .env.example .env   # confirma VITE_API_URL=http://localhost:4000/api
npm run dev
```

Front disponível em `http://localhost:5173`.

## Como rodar com Docker

```bash
docker compose up --build
```

O seed roda automaticamente na subida do backend.

- API em `http://localhost:4000`
- Web em `http://localhost:5173`

## Contas de teste (seed)

| Papel       | E-mail                     | Senha  |
| ----------- | -------------------------- | ------ |
| Organizador | organizador@ticketflow.com | 123456 |
| Cliente     | cliente1@ticketflow.com    | 123456 |
| Cliente     | cliente2@ticketflow.com    | 123456 |
| Portaria    | portaria@ticketflow.com    | 123456 |

O seed já publica um evento com assentos numerados e ingressos disponíveis (dois deles já
vendidos).

## Funcionalidades implementadas

- [x] Autenticação com 3 papéis, rotas protegidas por role.
- [x] Organizador cria evento a partir do catálogo TMDb ou manualmente,
      define venue, capacidade, tipos de ingresso, edita dados do evento, status e
      preço/quantidade dos tipos de ingresso existentes, cria porteiro vinculado ao evento e
      edita o próprio perfil (nome, telefone, logo).
- [x] Cliente navega, busca e vê detalhe dos eventos publicados.
- [x] Reserva de assento em cinema e teatro com lock transacional, impede venda duplicada.
- [x] Pagamento simulado com aprovação e recusa (cartão terminado em `0000` é recusado
      de propósito. Recusa libera o assento).
- [x] Ingresso com QR assinado por HMAC e código de acesso manual.
- [x] Link de compartilhamento público do ingresso (`/t/:shareToken`), sem exigir login.
- [x] Portaria valida por código manual ou câmera, com os 4 estados:
      válido, já utilizado, inválido, evento errado.
- [x] Layout responsivo (mobile e desktop).
- [x] Docker Compose (backend + frontend).
- [x] Aplicação publicada (Vercel + Render).

## Decisões e limitações conscientes

- **Venue não é editável após a criação do evento.** Da forma que foi feito o sistema dos mapas, qualquer
  mudança de layout do mapa depois que já foram feitas as reservas quebraria ele.
- **Só TMDb está integrado como catálogo externo**.
- **Cadastro de porteiro depende do organizador** Só é possivel cadastrar um porteiro quando o
  organizador tiver criado um evento e então fazer uma conta para o porteiro que estará viinculada à
  aquele evento, logo um porteiro não irá conseguir aprovar um ingresso que seja de outro evento.
- **Backend em plano gratuito sem disco persistente pago** para contornar isso sem custo,
  o seed roda automaticamente e de forma idempotente a cada subida do container, garantindo
  dados de teste mesmo que o disco seja resetado.

## Uso de IA

Usei o Claude dentro do projeto com o desenho do schema Prisma e da lógica de
reserva de assento, passando pela implementação de cada módulo do backend, a conexão do
front-end com a API real, os ajustes de responsividade, até a configuração de Docker e
deploy.

O que foi decidido por mim: a estrutura de pastas, o layout e design das páginas, os limites do que
entrar ou não no escopo, e todos os testes manuais via curl e pela interface, as funcionalidades
foram validadas por mim antes de seguir para a próxima.
