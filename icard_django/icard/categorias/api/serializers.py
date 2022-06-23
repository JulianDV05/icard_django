from rest_framework.serializers import ModelSerializer
from categorias.models import Category


class CategorySerializers(ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'image']
    