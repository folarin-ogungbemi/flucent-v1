from django import forms
from home.models import Contact


class ContactForm(forms.ModelForm):
    content = forms.CharField(
        label='Message',
        widget=forms.Textarea(
            attrs={
                'placeholder': "Enter your message here ...",
                }))

    class Meta:
        model = Contact
        fields = [
            'full_name',
            'email',
            'content']
