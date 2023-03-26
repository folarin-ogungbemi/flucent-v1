from django.contrib import admin
from blog.models import Category, Post, Comment, Like


class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('name', 'language',)
    list_filter = ('name', 'language')
    search_fields = ('name',)


class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = (
        'title', 'author', 'views', 'created_date',
        'updated_date', 'published')
    list_filter = ('published', 'created_date', 'updated_date')
    search_fields = ('title', 'content')


class LikesAdmin(admin.ModelAdmin):
    list_display = ('user', 'post', 'created_date',)
    list_filter = ('post', 'created_date',)
    search_fields = ('user', 'post',)


class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'author', 'total_likes', 'created_date', 'approved')
    list_filter = ('post', 'created_date', 'updated_date')
    search_fields = ('post', 'author')


admin.site.register(Category, CategoriesAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Like, LikesAdmin)
