from django.test import TestCase
from django.urls import reverse, resolve
from home.views import index


class TestUrls(TestCase):
    """Test the homePage urls"""
    def test_home_urls_resolve(self):
        url = reverse('home')
        self.assertEqual(resolve(url).func, index)
