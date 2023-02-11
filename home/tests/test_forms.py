from django.test import TestCase
from home.forms import ContactForm


class TestContactForm(TestCase):
    """Test required fields and meta"""
    def test_contact_form_fullname_is_required(self):
        form = ContactForm(
            {
                'name': '',
                'email': 'john.doe@email.com', 'content': 'test'})
        self.assertFalse(form.is_valid())
        self.assertIn('name', form.errors.keys())
        self.assertEqual(form.errors['name'][0], 'This field is required.')

    def test_contact_form_email_is_required(self):
        form = ContactForm(
            {
                'name': 'john doe',
                'email': '', 'content': 'test'})
        self.assertFalse(form.is_valid())
        self.assertIn('email', form.errors.keys())
        self.assertEqual(form.errors['email'][0], 'This field is required.')

    def test_contact_form_content_is_required(self):
        form = ContactForm(
            {
                'name': 'john doe',
                'email': 'john.doe@email.com', 'content': ''})
        self.assertFalse(form.is_valid())
        self.assertIn('content', form.errors.keys())
        self.assertEqual(form.errors['content'][0], 'This field is required.')

    def test_fields_are_explicit_in_form_metaclass(self):
        form = ContactForm()
        self.assertEqual(form.Meta.fields, ['name', 'email', 'content'])
