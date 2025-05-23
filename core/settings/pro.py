from .base import *

SECRET_KEY = PRO_SECRET_KEY

DEBUG = False 

ALLOWED_HOSTS = ['hanizstudio.com', 'www.hanizstudio.com']


DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': BASE_DIR / 'db.sqlite3',
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': DATABASE_NAME,
        'USER': DATABASE_USER,
        'PASSWORD': DATABASE_PASS,
        'HOST': 'localhost',
        'PORT': DB_PORT,
    }
}

CSRF_TRUSTED_ORIGINS = [
    'https://hanizstudio.com',
    'https://www.hanizstudio.com',
]


LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'rotating_file': {
            'level': 'ERROR',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': os.path.join(BASE_DIR, 'django_errors.log'),
            'maxBytes': 1024 * 1024 * 5,  # 5 MB
            'backupCount': 10,  # Keep 10 backup files
            'formatter': 'verbose',
        },
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['rotating_file', 'console'],
            'level': 'ERROR',
            'propagate': True,
        },
    },
}