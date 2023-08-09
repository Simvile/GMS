from django.shortcuts import render
from .models import *

# Create your views here.
def home(request):
    context={}
    return render(request, 'Home.html', context)

# ============ CUSTOMERS ====================#
#============================================#
def customers(request):
    if request.method == "POST":
        name = request.POST['first_name']
        surname = request.POST['Last_name']
        id_no = request.POST['ID_Number']
        email = request.POST['Email']
        work = request.POST['Work-Number']
        mobile = request.POST['Phone-Number']
        gender = request.POST['female']
        birthdate = request.POST['Birth-Date']
        street = request.POST['Street']
        complex = request.POST['Complex']
        town = request.POST['City']
        country = request.POST['country']
        postalcode = request.POST['Code']
        #image = request.POST['user-img']


        new_customer =  Customer(fisrt_name=name, second_name=surname,  email=email, id_number=id_no, work_number=work, mobile_number=mobile, gender=gender, date_of_birth=birthdate, street=street, complex=complex, city=town, country=country, postal_code=postalcode)
        new_customer.save()

    customers = Customer.objects.all()
    customers_num = Customer.objects.count()

        


    context={'customers':customers, 'customers_num':customers_num}
    return render(request, 'Customers.html', context)

# ============ CONSUMABLES ====================#
#============================================#
def consumables(request):
    context={}
    return render(request, 'Consumables.html', context)

# ============ Services ====================#
#============================================#
def services(request):
    context={}
    return render(request, 'Services.html', context)


# ============ Spares ====================#
#============================================#
def spares(request):
    context={}
    return render(request, 'Spares.html', context)


# ============ Vehicles ====================#
#============================================#
def vehicles(request):
    context={}
    return render(request, 'Vehicles.html', context)


# ============ Quotations ====================#
#============================================#
def quotations(request):
    context={}
    return render(request, 'Quotations.html', context)


# ============ Job_Cards ====================#
#============================================#
def cards(request):
    context={}
    return render(request, 'Job_Cards.html', context)


# ============ Invoices ====================#
#============================================#
def invoices(request):
    context={}
    return render(request, 'Invoices.html', context)