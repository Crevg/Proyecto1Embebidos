from ctypes import *
path = "./Clib/libmylib.so"
f = CDLL(path)
print(type(f))

a = f.leer_puerta(1)
print(a)