FROM node:14
COPY . .
Expose 3000
ENTRYPOINT ["npm","start"]
