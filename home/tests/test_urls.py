from django.test import SimpleTestCase
from django.urls import reverse, resolve
from home.views import index


class TestUrls(SimpleTestCase):
    """Test the homePage urls"""
    def test_home_urls_resolve(self):
        url = reverse('home')
        self.assertEqual(resolve(url).func, index)
