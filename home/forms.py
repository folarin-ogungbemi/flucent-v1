from django import forms
from home.models import Contact


class ContactForm(forms.ModelForm):
    full_name = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'John Doe'}))
    email = forms.CharField(
        widget=forms.TextInput(attrs={'placeholder': 'john@doe.com'}))

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
            'full_name',
            'email',
            'content']
