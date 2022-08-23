
# from rest_framework import routers, serializers, viewsets
from rest_framework.routers import SimpleRouter

from .views import *
router = SimpleRouter()
router.register("users", UserViewSet, basename="user")
urlpatterns = router.urls

# router = routers.DefaultRouter()
# router.register(r'api', UserViewSet)

