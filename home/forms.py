from django import forms
from home.models import Contact


class ContactForm(forms.ModelForm):
    name = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'John'}))
    email = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'john@email.com'}))

    content = forms.CharField(
        label='Message',
        widget=forms.Textarea(
            attrs={
                'rows': 3,
                'placeholder': "Enter your message here ...",
                }))

    class Meta:
        model = Contact
        fields = [
            'name',
            'email',
            'content']
