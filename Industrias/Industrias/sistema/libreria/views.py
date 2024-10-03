from django.shortcuts import render

# Create your views here.

def indexcarucel(request):
    return render(request, 'paginas/indexcarucel.html')

def OrdenTrabajo(request):
    return render(request , 'paginas/OrdenTrabajo.html' )

def actividad(request):
    return render(request, 'paginas/actividad.html')

def facturacion(request):
    return render(request, 'paginas/facturacion.html')

def facturas(request):
    return render(request, 'paginas/factutras.html')

def insumoproveedor(request):
    return render(request, 'paginas/insumoproveedor.html')

def maquinaria(request):
    return render(request, 'paginas/maquina.html')

def usuario(request):
    return render(request, 'paginas/usuario.html')

def operario(request):
    return render(request, 'paginas/operario.html')

def clientes(request):
    return render(request, 'paginas/cliente.html')

def inventario(request):
    return render(request, 'paginas/inventario.html')