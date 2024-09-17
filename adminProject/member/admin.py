from django.contrib import admin
from .models import Employee

@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('employee_id', 'name', 'department', 'position', 'hire_date', 'status')
    search_fields = ('name', 'employee_id', 'department')
    list_filter = ('status', 'department', 'position')
    ordering = ('hire_date',)
    readonly_fields = ('employee_id',)  # Make employee_id read-only if you don't want it to be editable

    # Optional: Add any additional customizations here
