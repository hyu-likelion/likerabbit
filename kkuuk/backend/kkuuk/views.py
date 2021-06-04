from django.shortcuts import render
from rest_framework import viewsets 
from .serializers import StoreSerializer 
from .serializers import UserSerializer
from .serializers import HistorySerializer
from .models import Store
from django.http import HttpResponse

class StoreViewSet(viewsets.ModelViewSet): 
    queryset = Store.objects.all() 
    serializer_class = StoreSerializer 

def index(request):
    return HttpResponse("적립 서비스 '꾸욱' 입니다.")