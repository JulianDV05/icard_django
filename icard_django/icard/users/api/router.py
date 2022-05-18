from django.urls import path
from rest_framework.routers import DefaultRouter
<<<<<<< HEAD
from rest_framework_simplejwt.views import (
    TokenObtainPairView
)
=======
from rest_framework_simplejwt.views import TokenObtainPairView
>>>>>>> develop
from users.api.views import UserApipViewSet, UserView

router_user = DefaultRouter()

router_user.register(
    prefix='users', basename='users', viewset=UserApipViewSet
)

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/me/', UserView.as_view())
]
