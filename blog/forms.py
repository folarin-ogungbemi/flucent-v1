from blog.models import Category, Post, Comment
from django import forms
from django.forms import FileInput, Textarea, TextInput
from ckeditor.widgets import CKEditorWidget
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Field
from crispy_forms.bootstrap import PrependedText


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = '__all__'


class PostForm(forms.ModelForm):
    """Rendering PostForm for the Blog Post"""
    class Meta:
        model = Post
        fields = [
            'title', 'author', 'image', 'categories',
            'excerpt', 'content', 'published'
        ]
    image = forms.ImageField(
            label="Image", required=False,
            widget=FileInput(attrs={'class': 'form-control'}))
    excerpt = forms.CharField(
            label="Excerpt", required=False,
            widget=Textarea(attrs={'rows': 4}))
    categories = forms.ModelMultipleChoiceField(
        queryset=Category.objects.all(),
        widget=forms.SelectMultiple(),
        required=False, label='Programming Language')
    content = forms.CharField(
        widget=CKEditorWidget(
            attrs={'style': 'height: 300px;'}), label='Content')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.helper = FormHelper()
        self.helper.form_method = 'post'
        self.helper.layout = Layout(
            Field('content', css_class='ckeditor'),)


class CommentForm(forms.ModelForm):
    content = forms.CharField(
        widget=Textarea(
            attrs={
                'rows': 3,
                'placeholder': "comment here ..."}), label='Comment')

    class Meta:
        model = Comment
        fields = ['content']
