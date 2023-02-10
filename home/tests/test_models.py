from django.test import TestCase
from home.models import Contact


class TestContact(TestCase):
    """Test contact model fields"""
    def setUp(self):
        self.contact = Contact()
        self.contact.email = 'john.doe@email.com'
        self.contact.content = "hello developer"
        self.contact.save()

    def test_contact_fields(self):
        message = Contact.objects.get(pk=self.contact.id)
        self.assertEqual(message, self.contact)

    def test_contact_str_method_returns_email(self):
        email = Contact.objects.create(email=self.contact.email)
        self.assertEqual(str(email), 'john.doe@email.com')
