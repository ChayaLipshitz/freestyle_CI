docker build -t  note_task .

docker volume create noteTask

docker run --name chat-app-run --cpus "2.0" --memory "1g" -v noteTask-data:/data note_task
 -p 4000:4000 

 