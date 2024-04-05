FROM node
WORKDIR /app

COPY . ./

RUN npm install
RUN npm install -g typescript
RUN npm run build

EXPOSE 9000

CMD ["npm", "start"]
