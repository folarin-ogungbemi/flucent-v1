from django.shortcuts import render
from django.views.generic import TemplateView


class BlogView(TemplateView):
    template_name = 'blog/blog.html'
