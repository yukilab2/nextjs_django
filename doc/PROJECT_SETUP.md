```
cd <project root directory>
mkdir -p frontend
mkdir -p backend

cd <project root directory>/frontend
npx create-next-app@latest --ts
# project name : my-frontend-app
cd my-frontend-app
# `yarn dev` => nextjs web shall be shown at http://localhost:3000
# ------------------------------------

cd <project root directory>/backend
python3 -m venv venv
. venv/bin/activate
pip install django django-rest-frameworkb markdown django-filter
python -m django startproject mysite
cd mysite
./manage.py makemigration
./manage.py migrate 

./manage.py createsuperuser
# username someone  password someone  -- whatever you want to log in to django (django admin)

# `manage.py runserver`  =>  django web shall be shown at http://localhost:8000
```

