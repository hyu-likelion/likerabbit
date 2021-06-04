from rest_framework import serializers 
from .models import History, Store, User 

class StoreSerializer(serializers.ModelSerializer): 
    class Meta: model = Store # 모델 설정 
    fields = ('id','call','name','pwd', 'created_at', 'is_deleted') # 필드 설정

class UserSerializer(serializers.ModelSerializer): 
    class Meta: model = User # 모델 설정 
    fields = ('id','name','store','last_4_digit','created_at', 'is_deleted') # 필드 설정

class HistorySerializer(serializers.ModelSerializer): 
    class Meta: model = History # 모델 설정 
    fields = ('id','trade_type_choices','trade_type','user','trade_at','before_stamp','val_stamp','after_stamp') # 필드 설정