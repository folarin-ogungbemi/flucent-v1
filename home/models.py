from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=254)
    email = models.EmailField()
    content = models.TextField()
    messaged_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-messaged_on']

    def __str__(self):
        return self.email
