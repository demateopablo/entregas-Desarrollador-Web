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

### Clase ModuloWifi
- **Atributos:**
  - `velocidadMbps` (number)
  - `frecuenciaGHz` (number)

- **Métodos:**
  - Getters y setters para los atributos

### En SmartHeladera
- **Atributos adicionales:**
  - `moduloWifi`: `ModuloWifi`

- **Funcionalidades adicionales:**
  - Simular una conexión online (`conectarInternet()`)
  - Mostrar la velocidad de conexión

## 🧪 Parte 3 - Prueba

- Crear una instancia de `SmartHeladera`
- Encenderla
- Cambiar la temperatura
- Conectarse a internet
- Mostrar información
