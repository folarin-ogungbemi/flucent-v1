from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone
from django.core.validators import MinValueValidator
from ckeditor.fields import RichTextField


class Category(models.Model):
    name = models.CharField(max_length=50)
    language = models.CharField(
        max_length=50, default='Python')

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=254)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(
        upload_to='post_images/', blank=True,
        null=True, default="placeholder")
    categories = models.ManyToManyField(Category)
    excerpt = models.CharField(max_length=254, blank=True)
    content = RichTextField()
    views = models.IntegerField(
        default=0, validators=[MinValueValidator(0)])
    created_date = models.DateTimeField(default=timezone.now)
    updated_date = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_date']

    def __str__(self):
        return self.title

    def get_detail_absolute_url(self):
        return reverse('post_detail', args=[str(self.slug)])

    def get_update_absolute_url(self):
        return reverse('update_post', args=[str(self.slug)])

    def get_delete_absolute_url(self):
        return reverse('delete_post', args=[str(self.slug)])


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='likes')
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"{self.post}"

    def total_likes(self):
        return self.likes.count()


class Comment(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    likes = models.ManyToManyField(
        User, related_name='comment_likes', blank=True)
    created_date = models.DateTimeField(default=timezone.now)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    approved = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_date']

    def __str__(self):
        return self.content

    def total_likes(self):
        return self.likes.count()
