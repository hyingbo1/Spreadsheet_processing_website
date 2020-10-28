from django.shortcuts import render
from django.http import HttpResponse
from login.models import CustomModels
from urllib import request
import traceback
# Create your views here.
def index(request):
    print('success')
    return HttpResponse(render(request,'index.html'))
def login(request):
    print('123')
    if request.method == 'POST':
        print('success')
        try:
            customid = request.POST['customid']
            pw = request.POST['pw']
            check = CustomModels.objects.filter(customid = customid,pw = pw)
            if check:
                request.session['pw'] = pw
                custom = CustomModels.objects.get(customid = customid,pw = pw)
                request.session['customid'] = customid
                return render(request, '123.html')
            else:
                result = '登录失败了~'
                return HttpResponse(result)
        except:
            traceback.print_exc()