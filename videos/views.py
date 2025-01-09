from django.shortcuts import render, get_object_or_404


from videos.models import Video


def VideoShowView(request, id):
    video = get_object_or_404(Video, uuid=id)
    
    context = dict(
        page_title=video.name,
        video=video,
    )
    
    return render(
        request,
        'videos/video_show.html',
        context        
    )
