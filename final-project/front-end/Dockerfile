# Usa a imagem oficial do Node.js
FROM node:lts AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código fonte
COPY . .

# Build da aplicação (caso tenha uma build em produção)
RUN npm run build

# Expor a porta em que o Vite estará rodando
EXPOSE 5173

# ERRADO
# # Rodar a aplicação em modo de desenvolvimento
# CMD ["npm", "run", "dev"]

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]