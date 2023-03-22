from django.shortcuts import render, redirect
from home.forms import ContactForm
from django.contrib import messages


def index(request):
    contact_form = ContactForm()

    if request.method == "POST":
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            name = contact_form.cleaned_data['name']
            contact_form.save()
            messages.add_message(
                    request,
                    messages.SUCCESS,
                    f'Thanks {name}, I have received your message.')
            return redirect('home')
        contact_form = ContactForm()
        messages.add_message(
            request, messages.ERROR, 'Invalid! message could not be submitted')

    context = {'form': contact_form}
    return render(request, 'home/index.html', context)
