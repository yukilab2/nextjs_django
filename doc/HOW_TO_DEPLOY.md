# how to deploy

```
(cd ./frontend/my-frontend-app && yarn build && yarn export)

rm -f ./backend/mysite/frontend/templates/*
mkdir -p ./backend/mysite/frontend/templates
cp ./frontend/out/*.html ./backend/mysite/frontend/templates

rm -f ./backend/mysite/frontend/static/_next
mkdir -p ./backend/mysite/frontend/static/_next
cp ./frontend/out/_next/* ./backend/mysite/frontend/static/_next

rm -f ./backend/mysite/frontend/static/api
mkdir -p ./backend/mysite/frontend/static/_next
cp ./frontend/out/_next/* ./backend/mysite/frontend/static/_next



```