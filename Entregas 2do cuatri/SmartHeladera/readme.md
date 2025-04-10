# Objetivo: Aplicar herencia entre clases de electrodomésticos y composición usando módulos inteligentes.

## 🧱 Parte 1 - Herencia

### Clase Electrodomestico
- **Atributos:**
  - `marca` (string)
  - `modelo` (string)
  - `estaEncendido` (boolean)

- **Métodos:**
  - `encender()`
  - `apagar()`
  - `mostrarInfo()`

### Clase Heladera (hereda de Electrodomestico)
- **Atributos adicionales:**
  - `temperatura` (number)

- **Métodos adicionales:**
  - `cambiarTemperatura(nuevaTemp: number)`

### Clase SmartHeladera (hereda de Heladera)
- **Composición:**
  - Incluye una instancia de la clase `ModuloWifi`

## 🧱 Parte 2 - Composición

### Crear clase ModuloWifi con atributos:
- **Atributos:**
  - `velocidadMbps` (number)
  - `frecuenciaGHz` (number)

- **Métodos:**
  - Getters y setters para los atributos

### En SmartHeladera agregar un atributo moduloWifi: ModuloWifi y usarlo para:
  - simular una conexión online (`conectarInternet()`)
  - mostrar la velocidad de conexión

## 🧪 Parte 3 - Prueba

- Crear una instancia de `SmartHeladera`
- Encenderla
- Cambiar la temperatura
- Conectarse a internet
- Mostrar información
