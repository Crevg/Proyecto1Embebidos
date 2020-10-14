class Cuarto:
    def __init__(self, nombre, id, estado):
        self.nombre = nombre
        self.id = id
        self.estado = estado 

    def setEstado(self, estado):
        self.estado = estado

    def getNombre(self):
        return self.nombre

    def getId(self):
        return self.id

    def getEstado(self):
        return self.estado
