from django.urls import path

from . import views

app_name = 'en'
urlpatterns = [
    path('', views.HomePage.as_view(), name='index'),

    # Organization
    path('organization/publicis/', views.PublicisHome.as_view(), name='publicisHome'),
    path('organization/publiciscommerce', views.PublicisCommerceHome.as_view(), name='publicisCommerceHome'),
    path('organization/structure', views.PublicisStructureHome.as_view(), name='publicisStructureHome'),
    path('organization/janus', views.JanusHome.as_view(), name='janusHome'),


    ####################
    # TOOLS & SERVICES
    ####################

    # Travel Policy
    path('tools_services/travelpolicy', views.TravelPolicyHome.as_view(), name='TravelPolicyHome'),
    path('tools_services/travelpolicy/traveler', views.TravelPolicyTravellerHome.as_view(), name='TravelPolicyTravellerHome'),
    path('tools_services/travelpolicy/faq', views.TravelPolicyFaqHome.as_view(), name='TravelPolicyFaqHome'),
    path('tools_services/travelpolicy/planning', views.TravelPolicyPlanningHome.as_view(), name='TravelPolicyPlanHome'),
    path('tools_services/travelpolicy/expenses', views.TravelPolicyExpensesHome.as_view(), name='TravelPolicyExpensesHome'),
    ]
