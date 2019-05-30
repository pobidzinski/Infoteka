from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin


# ORGANIZATION VIEWS

class HomePage(LoginRequiredMixin, TemplateView):
    template_name = 'en/index.html'


class PublicisHome(LoginRequiredMixin, TemplateView):
    template_name = 'en/organization/publicis.html'


class PublicisCommerceHome(LoginRequiredMixin, TemplateView):
    template_name = 'en/organization/publicis_commerce.html'


class PublicisStructureHome(LoginRequiredMixin, TemplateView):
    template_name = 'en/organization/structure.html'


class JanusHome(LoginRequiredMixin, TemplateView):
    template_name = 'en/organization/janus.html'



# TOOLS AND SERVICES VIEWS

class TravelPolicyHome(LoginRequiredMixin, TemplateView):
    template_name = 'en/tools_services/travel_policy/travel_policy.html'

class TravelPolicyTravellerHome(LoginRequiredMixin, TemplateView):
    template_name = 'en/tools_services/travel_policy/travel_policy_traveler.html'

class TravelPolicyFaqHome(LoginRequiredMixin, TemplateView):
    template_name = 'en/tools_services/travel_policy/travel_policy_faq.html'

class TravelPolicyPlanningHome(LoginRequiredMixin, TemplateView):
    template_name = 'en/tools_services/travel_policy/travel_policy_planning.html'

class TravelPolicyExpensesHome(LoginRequiredMixin, TemplateView):
    template_name = 'en/tools_services/travel_policy/travel_policy_expenses.html'