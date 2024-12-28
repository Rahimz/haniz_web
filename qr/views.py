from django.shortcuts import render
from django.utils.translation import gettext_lazy as _

def QrShowView(request, slug):
    context = dict(
        page_title = _("QR")
    )
    return render(
        request,
        'qr/qr_show.html',
        context
    )
