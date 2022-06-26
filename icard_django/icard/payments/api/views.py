from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from payments.models import Payment
from payments.api.serializers import PaymentSerializer


class PaymentApiViewSet(ModelViewSet):
    serializer_class = PaymentSerializer
    queryset = Payment.objects.all()
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    #Sistema de filtros
    filterset_fields = ['table', 'statusPayment']
    #Sistema de ordering
    ordering_fields = '__all__'