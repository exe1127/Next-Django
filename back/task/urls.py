from rest_framework import routers
from .api import TaskView

router = routers.DefaultRouter()
router.register('back/task', TaskView, 'tasks')
urlpatterns = router.urls
