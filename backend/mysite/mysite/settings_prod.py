
import os
from .settings import *

DEBUG = False

STATIC_ROOT = '/var/www/cgi/mysite/collected_static'
STATICFILES_DIR = [
  '/var/www/cgi/mysigte/mystatic'
]

ALLOWD_HOST = [
  'mysite.com'
]
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings_prod')

# LOGGING = {
  
# }