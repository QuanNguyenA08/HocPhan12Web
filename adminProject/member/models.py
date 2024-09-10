from django.db import models

class Employee(models.Model):
    STATUS_CHOICES = [
        ('Active', 'Active'),
        ('Inactive', 'Inactive'),
        ('On Leave', 'On Leave'),
    ]

    employee_id = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=100)
    dob = models.DateField()
    phone = models.CharField(max_length=15)
    address = models.TextField()
    email = models.EmailField()
    department = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    hire_date = models.DateField()
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='Active')
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.employee_id})"
