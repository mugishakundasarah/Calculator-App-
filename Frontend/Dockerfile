#specify a base image 
FROM node:alpine

#install some dependencies 
WORKDIR /usr/app
COPY ./ /usr/app/
RUN npm install 

#Default command 
CMD ["npm","start"]
EXPOSE 5173