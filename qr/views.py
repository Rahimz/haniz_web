from django.shortcuts import render


def QrShowView(request, slug):
    context = dict()
    return render(
        request,
        '',
        context
    )
