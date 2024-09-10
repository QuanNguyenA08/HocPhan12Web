from django.http import HttpResponse
from django.template import loader

def loadNhanSu(request):
  template = loader.get_template('nhanSu.html')
  return HttpResponse(template.render())


def editNhanSu(request):
  pass


def updateNhanSu(request):
  pass

def deleteNhanSu(request):
  pass

