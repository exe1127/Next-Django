from rest_framework import routers
from .views import TaskView

router=routers.DefaultRouter()
router.register('api/task',TaskView,'task')
urlpatterns = router.urls