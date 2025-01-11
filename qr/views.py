from django.shortcuts import render, get_object_or_404
from django.utils.translation import gettext_lazy as _
from django.http import HttpResponseRedirect


from qr.models import QrCode
from generals.models import Image


def QrShowView(request, slug):
    qr = get_object_or_404(QrCode, slug=slug, active=True)
    if qr.redirect:
        return HttpResponseRedirect(qr.redirect)

    images = None 
    if qr.file:
        # if it is catalougue
        images = Image.objects.all()
    context = dict(
        page_title = qr.name,
        qr=qr,
        images=images
    )
    return render(
        request,
        'qr/qr_show.html',
        context
    )
