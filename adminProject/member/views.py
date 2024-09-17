from django.http import HttpResponse
from django.template import loader
from .forms import EmployeeForm, ProductForm
from django.shortcuts import render, redirect,get_object_or_404
from .models import Employee



def loadNhanSu(request):
    if request.method == 'POST':
        form = EmployeeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('nhanSu')
    else: 
        form = EmployeeForm()

    # Query the database for all employees
    employees = Employee.objects.all()

    return render(request, 'nhanSu.html', {'form': form, 'employees': employees})


def updateNhanSu(request):
    if request.method == 'POST':
        employee_id = request.POST.get('employee_id')
        employee = get_object_or_404(Employee, employee_id=employee_id)

        form = EmployeeForm(request.POST, instance=employee)
        if form.is_valid():
            form.save()
            return redirect('nhanSu')  # Redirect after successful update
        else:
            print('error',form.errors)  # Print form errors to debug
    return redirect('nhanSu')


def deleteNhanSu(request):
  pass

def loadProduct(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('Product')
    else:
        form = ProductForm()
    return render(request, 'Product.html', {'form': form})

