from django.shortcuts import render
from django.views.generic import TemplateView


class HomePage(TemplateView):
    template_name = 'en/index.html'


class PublicisHome(TemplateView):
    template_name = 'en/organization/publicis.html'