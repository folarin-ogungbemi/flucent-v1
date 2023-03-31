from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogView.as_view(), name='blog'),
    path('add/', views.PostCreateView.as_view(), name='add_post'),
    path(
        'post_detail/<slug:slug>',
        views.PostDetailView.as_view(), name='post_detail'),
    path(
        'update/<slug:slug>',
        views.PostUpdateView.as_view(), name='update_post'),
    path(
        'delete/<slug:slug>',
        views.PostDeleteView.as_view(), name='delete_post'),
]
