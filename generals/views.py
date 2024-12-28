from django.shortcuts import render


def HomeView(request):
    context = dict()
    return render(
        request,
        'generals/home.html',
        context
    )
