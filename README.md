# Extensión LCD I2C para Micro:bit

Esta extensión añade bloques para controlar una pantalla LCD 16x2 con interfaz I2C usando MakeCode para micro:bit.

## Funcionalidades

- Inicializar pantalla LCD
- Escribir texto en una línea específica
- Limpiar pantalla

## Ejemplo de uso

```typescript
LCD.init(0x27)
LCD.show("Hola!", 1)
LCD.show("Micro:bit", 2)
basic.pause(2000)
LCD.clear()
```

## Conexión

Conecta el módulo LCD I2C a los pines SCL/SDA del Micro:bit (habitualmente P19 y P20 en V1, o P19/P20 o Grove en V2).

---