from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'git_lab.views.index', name="index"),
    url(r'^proxy/(?P<path>.*)$', 'git_lab.views.proxy_to', {'target_url': 'https://api.github.com/'}),
)
