from django.urls import path

from . import views

app_name = 'en'
urlpatterns = [
    path('', views.HomePage.as_view(), name='index'),

    # Organization
    path('organization/publicis/', views.PublicisHome.as_view(), name='publicisHome'),
]
