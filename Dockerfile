FROM node:alpine
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY *.js ./
COPY commands/ ./commands/
COPY services/ ./services/
COPY static/ ./static/
COPY utils/ ./utils/
COPY views/ ./views/

EXPOSE 3000
EXPOSE 4000

CMD ["npm", "run", "start"]