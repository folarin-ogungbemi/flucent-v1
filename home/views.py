from django.shortcuts import render, redirect
from django.views.generic.edit import FormView
from home.forms import ContactForm
from django.contrib import messages


# Create your views here.
def index(request):
    contact_form = ContactForm()

    if request.method == "POST":
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            contact_form.save()
            messages.add_message(
                    request,
                    messages.SUCCESS,
                    f'Thanks, I have received your message.')
            return redirect('home')

    context = {'form': contact_form}
    return render(request, 'home/index.html', context)
