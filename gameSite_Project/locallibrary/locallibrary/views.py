from django.shortcuts import render

def home(request):
	return render(request, 'HTML_JS_Wabpage.html')