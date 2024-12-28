from django.shortcuts import render, get_object_or_404
from django.utils.translation import gettext_lazy as _


from qr.models import QrCode


def QrShowView(request, slug):
    qr = get_object_or_404(QrCode, slug=slug)
    context = dict(
        page_title = _("QR"),
        qr=qr
    )
    return render(
        request,
        'qr/qr_show.html',
        context
    )
