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
        contact = Contact()
        contact.full_name = 'max bean'
        contact.email = 'max.bean@email.com'
        contact.content = 'This is a message to you from max.'
        contact.save()

        message = Contact.objects.get(pk=contact.id)
        self.assertEqual(message, contact)
