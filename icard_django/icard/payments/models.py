from msilib.schema import tables
from secrets import choice
from django.db import models

#Solo dos opciones de pago
PaymentTypeEnum = (
    ("CARD", "card"),
    ("CASH", "cash")
)

#Dos opciones en el estado del pago
StatusPaymentEnum = (
    ("PENDING", "pending"),
    ("PAID", "paid")
)

class Payment(models.Model):
    table = models.ForeignKey('tables.Table', on_delete=models.SET_NULL, null=True) 
    totalPayment = models.DecimalField(max_digits=12, decimal_places=3)
    paymentType = models.CharField(max_length=255, choices=PaymentTypeEnum)
    statusPayment = models.CharField(max_length=255, choices=StatusPaymentEnum)
    #Genera la fecha automáticamente
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.table)
