from django.shortcuts import render
from django.views.generic.edit import FormView
from home.forms import ContactForm


# Create your views here.
def index(request):
    contact_form = ContactForm()
    context = {'form': contact_form}
    return render(request, 'home/index.html', context)
