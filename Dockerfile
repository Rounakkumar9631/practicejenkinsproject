From node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3200
CMD ["node","app.js"]