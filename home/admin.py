from django.contrib import admin
from home.models import Contact
from django_summernote.admin import SummernoteModelAdmin


@admin.register(Contact)
class ContactAdmin(SummernoteModelAdmin):
    summernote_fields = ('content',)
    list_display = ('name', 'email', 'messaged_on')
    list_filter = ('email',)
