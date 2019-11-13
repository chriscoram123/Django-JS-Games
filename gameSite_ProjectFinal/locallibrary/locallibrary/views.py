from django.shortcuts import render
from django.http import HttpResponse

def home(request):
	return render(request, 'VideoGameWebPage.html')

def pageOne(request):
	return render(request, 'HTML_JS_Wabpage.html')

def pageTwo(request):
	return render(request, 'Shooter Game.html')