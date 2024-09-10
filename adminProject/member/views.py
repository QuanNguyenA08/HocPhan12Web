from django.http import HttpResponse
from django.template import loader
from .forms import EmployeeForm
from django.shortcuts import render, redirect



def loadNhanSu(request):
    if request.method == 'POST':
        form = EmployeeForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('nhanSu')  # Redirect to a page listing employees after saving
    else:
        form = EmployeeForm()
    return render(request, 'nhanSu.html', {'form': form})


def editNhanSu(request):
  pass


def updateNhanSu(request):
  pass

def deleteNhanSu(request):
  pass

