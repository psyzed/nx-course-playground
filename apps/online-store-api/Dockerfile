FROM node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=8080

WORKDIR /app

COPY dist/apps/online-store-api .

RUN chown -R node:node .

RUN npm install --production

CMD ["node", "."]

