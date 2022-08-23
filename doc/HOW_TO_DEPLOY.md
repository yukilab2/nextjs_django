# how to deploy

```
(cd ./frontend/my-frontend-app && yarn build && yarn export)
cp -r ./frontend/my-frontend-app/out/* ./backend/mysite/frontend/

```