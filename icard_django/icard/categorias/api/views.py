from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from categorias.models import Category
from categorias.api.serializers import CategorySerializers

class CategoryApiViewSet(ModelViewSet):
    permission_classes = IsAuthenticatedOrReadOnly
    serializer_class = CategorySerializers
    queryset = Category.objects.all()
    