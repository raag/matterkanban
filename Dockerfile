FROM node:current-alpine
WORKDIR /usr/src/app
EXPOSE 3000
COPY ./ .
COPY start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]