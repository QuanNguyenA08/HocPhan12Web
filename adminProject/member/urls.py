
from django.contrib import admin
from django.urls import path
from member import views

urlpatterns = [
    path('nhanSu', views.loadNhanSu, name='nhanSu'),
    path('product', views.loadProduct, name='product'),
    path('employee/update/<str:employee_id>/', views.updateNhanSu, name='update_employee'),
    #/update-employee/TE7091
]
