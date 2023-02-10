from django.test import TestCase
from django.urls import reverse
from home.models import Contact


class TestViews(TestCase):
    """Test page views"""

    def setUp(self):
        self.home_url = reverse('home')
        self.contact = Contact.objects.create(
            full_name='john doe',
            email='john.doe@email.com',
            content='message to developer'
        )

    def test_home_index_GET(self):
        response = self.client.get(self.home_url)
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home/index.html')

    def test_home_index_contact_POST(self):
        response = self.client.post(
            self.home_url, {'full_name': 'john doe', 'email': 'john.doe@email.com', 'content': 'its a text'})
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, self.home_url)


