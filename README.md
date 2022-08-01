# AnselmeBooks-Front

## Para subir o ambiente
docker run -it --name node-dev -v $(pwd)/:/app -p 80:4200 node bash
npm install -g @angular/cli
npm install -g n
n 14.17.5

cd /app/anselmebooks
ng serve --host 0.0.0.0

## Para rodar no VSCode
docker exec -it node-dev bash
cd /app/anselmebooks