```
cd <project root directory>
mkdir -p frontend
mkdir -p backend

cd <project root directory>/frontend
npx create-next-app@latest --ts
# project name : my-frontend-app

cd <project root directory>/backend
python3 -m venv venv
. venv/bin/activate
pip install django django-rest-framework
python -m django startproject mysite
```

