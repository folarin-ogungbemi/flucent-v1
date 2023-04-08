from django.shortcuts import render
from django.views.generic import (
    TemplateView, CreateView, FormView, ListView, DeleteView)
from django.views.generic.detail import DetailView
from django.views.generic.edit import UpdateView
from blog.forms import PostForm, CategoryForm, CommentForm
from blog.models import Post, Category, Comment
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin


class BlogView(ListView):
    model = Post
    template_name = 'blog/blog.html'
    context_object_name = 'posts'
    queryset = Post.objects.filter(published=True)
    paginate_by = 5


class PostCreateView(LoginRequiredMixin, CreateView):
    template_name = 'blog/Admin/add_post.html'
    success_url = reverse_lazy('add_post')
    model = Post
    form_class = PostForm
    category_form_class = CategoryForm

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['post_form'] = self.form_class()
        context['category_form'] = self.category_form_class()
        return context

    def form_valid(self, form):
        form.instance.author = self.request.user
        if 'post-form' in self.request.POST:
            return super().form_valid(form)
        elif 'category-form' in self.request.POST:
            return super().form_valid(form)

    def form_invalid(self, form):
        return self.render_to_response(
            self.get_context_data(form=form))

    def post(self, request, *args, **kwargs):
        if 'post-form' in request.POST:
            self.form_class = self.form_class
        elif 'category-form' in request.POST:
            self.form_class = self.category_form_class
        return super().post(request, *args, **kwargs)


class PostUpdateView(LoginRequiredMixin, CreateView, UpdateView):
    model = Post
    form_class = PostForm
    template_name = 'blog/Admin/update_post.html'

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form_class = self.get_form_class()
        form = form_class(request.POST, request.FILES, instance=self.object)
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)

    def get_success_url(self):
        return reverse_lazy('post_detail', kwargs={'slug': self.object.slug})


class PostDeleteView(LoginRequiredMixin, DeleteView):
    model = Post
    form_class = PostForm
    template_name = 'blog/Admin/delete_post.html'
    success_url = reverse_lazy('blog')


class PostDetailView(LoginRequiredMixin, DetailView):
    model = Post
    template_name = 'blog/post_detail.html'
    context_object_name = 'post'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        post = self.get_object()
        comments = post.comments.filter(approved=True).distinct()
        context['comments'] = comments
        context['comment_form'] = CommentForm()
        return context

    def post(self, request, *args, **kwargs):
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.author = request.user
            comment.post = self.get_object()
            comment.save()
            return self.get(request, *args, **kwargs)
        else:
            context = self.get_context_data()
            context['comment_form'] = form
            return self.render_to_response(context)
