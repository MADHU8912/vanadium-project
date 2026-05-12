docker build -t nikhilabba12/vanadium-backend ./backend
docker push nikhilabba12/vanadium-backend
docker pull nikhilabba12/vanadium-backend
docker logs vanadium-backend
docker cp vanadium-backend:/app/server.js .
