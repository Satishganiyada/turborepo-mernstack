# turborepo-mernstack
## Dependencies to install
### node.js npm 

## Build both services
### npm run build

## Run backend 
### pm2 start server.js --name backend

## Run frontend
### pm2 start "npx serve -s build -l 3000" --name frontend

## Acess application
### Frontend: http://<EC2-Public-IP>:3000
### Backend: http://<EC2-Public-IP>:5000



