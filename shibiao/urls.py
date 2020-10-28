"""shibiao URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from upload import views as upload_view
from django.conf.urls.static import static
from django.conf import settings
from login import views as login_view
urlpatterns = [
    url(r'^$',login_view.index),
    url(r'^admin/', admin.site.urls),
    url(r'^upload/$',upload_view.upload),
    url(r'^download/$',upload_view.download),
    url(r'^test1/$',upload_view.test1),
    url(r'^test/$',upload_view.test2),
    url(r'^after_img_form/$',upload_view.after_img_form),
    url(r'^login/$',login_view.login),
    url(r'^img_form/$', upload_view.img_form),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
