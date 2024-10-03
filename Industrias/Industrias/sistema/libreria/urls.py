from django.urls import path
from . import views

urlpatterns = [
    path('', views.indexcarucel, name='indexcarucel'),
    path('OrdenTrabajo/', views.OrdenTrabajo, name='OrdenTrabajo'),
    path('actividad/', views.actividad, name='actividad'),
    path('facturacion/', views.facturacion, name='facturacion'),
    path('insumoproveedor/',views.insumoproveedor, name='insumoproveedor'),
    path('maquinaria/', views.maquinaria, name='maquinaria'), 
    path('usuario/', views.usuario, name='usuario'),
    path('operario/', views.operario, name='operario'),
    path('clientes/', views.clientes, name='clientes'),
    path('inventario/', views.inventario, name='inventario'),
    path('facturas', views.facturas, name='facturas'),
]
