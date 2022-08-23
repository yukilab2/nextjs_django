chdir = '/var/www/cgi/mysite'
pythonpath= 'full_path_to_python,/var/www/cgi/mysite,full_path_to_python_site_packages'
raw_env = [
  'PATH=full_path_to_venv_bin:${PATH}'
]

loglevel = 'debug'
errorlog = '/var/log/gunicorn/error.log'
accesslog = '/var/log/gunicorn/access.log'

workers = 3
bind = ['unix:/somewhere/gunicorn.sock']