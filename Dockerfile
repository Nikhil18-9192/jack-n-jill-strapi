FROM strapi/strapi:3.6.3
WORKDIR /app
COPY . .
ENV NODE_ENV='production'
# COPY .env .env
RUN yarn
RUN yarn build
EXPOSE 1337
CMD ["strapi", "start"]