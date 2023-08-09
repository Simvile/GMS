from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('customers/', views.customers, name="customers"),
    path('consumables/', views.consumables, name="consumables"),
    path('services/', views.services, name="services"),
    path('spares/', views.spares, name="spares"),
    path('vehicles/', views.vehicles, name="vehicles"),
    path('quotations/', views.quotations, name="quotations"),
    path('cards/', views.cards, name="cards"),
    path('invoices/', views.invoices, name="invoices"),
]