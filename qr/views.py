from django.shortcuts import render, get_object_or_404
from django.utils.translation import gettext_lazy as _
from django.http import HttpResponseRedirect


from qr.models import QrCode


def QrShowView(request, slug):
    qr = get_object_or_404(QrCode, slug=slug, active=True)
    if qr.redirect:
        return HttpResponseRedirect(qr.redirect)

        
    context = dict(
        page_title = qr.name,
        qr=qr
    )
    return render(
        request,
        'qr/qr_show.html',
        context
    )
