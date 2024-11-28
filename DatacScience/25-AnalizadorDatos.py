#esta linea sirve para agregar texto
texto = input("texto de almenos 10  palabras")

# contar numeros en texto
Nu_caracterristicas = len(texto)
Nu_caracterristicas

#contar numeros con caracteres sin incluir espacios
NumEspacios = texto.count(" ")
NumCaracteresSinEspacio = Nu_caracterristicas - NumEspacios
NumCaracteresSinEspacio

#contar numero de vocales 
a = texto.count("a")
e = texto.count("e")
i = texto.count("i")
o = texto.count("o")
u = texto.count("u")
vocales = a+e+i+o+u

NumeroPalabras = NumEspacios + 1
print(NumeroPalabras)

#para borrar la primera palabra
primero_espacio = texto.find(" ")
PrimeraPalabra = texto[primero_espacio + 1]

