from django.db import models

# Create your models here.
class Customer(models.Model):
    fisrt_name = models.CharField(max_length=20, null=True)
    second_name = models.CharField(max_length=20, null=True)
    email = models.EmailField(null=True)
    id_number = models.IntegerField(null=True)
    work_number = models.IntegerField(null=True)
    mobile_number = models.IntegerField(null=True)
    gender = models.CharField(max_length=7, null=True)
    date_of_birth = models.DateField(null=True)
    street = models.CharField(max_length=20, null=True)
    complex = models.CharField(max_length=20, null=True)
    city = models.CharField(max_length=20, null=True)
    country = models.CharField(max_length=20, null=True)
    postal_code = models.IntegerField(null=True)
    # image = models.ImageField(null=True)

    def __str__(self):
        return self.fisrt_name

