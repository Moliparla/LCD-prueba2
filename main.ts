/**
 * LCD I2C Extension for micro:bit
 */
//% color=#00A2FF icon="\uf26c" block="LCD"
namespace LCD {
    let lcd_addr = 0x27

    /**
     * Inicializar la pantalla LCD con la dirección I2C
     * @param addr Dirección I2C, eg: 0x27
     */
    //% block="inicializar LCD en dirección I2C $addr"
    //% addr.min=0 addr.max=127
    export function init(addr: number = 0x27): void {
        lcd_addr = addr
        basic.pause(50)
        // Comandos de inicialización típicos para LCD 16x2 (I2C)
        writeCmd(0x33)
        writeCmd(0x32)
        writeCmd(0x28)
        writeCmd(0x0C)
        writeCmd(0x06)
        writeCmd(0x01)
        basic.pause(5)
    }

    /**
     * Escribir texto en una línea específica (1 o 2)
     * @param text Texto a mostrar
     * @param line Línea (1 o 2)
     */
    //% block="mostrar $text en línea $line"
    //% line.min=1 line.max=2
    export function show(text: string, line: number = 1): void {
        let pos = line == 1 ? 0x80 : 0xC0
        writeCmd(pos)
        for (let i = 0; i < text.length; i++) {
            writeChar(text.charCodeAt(i))
        }
    }

    /**
     * Limpiar pantalla LCD
     */
    //% block="limpiar pantalla LCD"
    export function clear(): void {
        writeCmd(0x01)
        basic.pause(2)
    }

    // Funciones internas
    function writeCmd(cmd: number): void {
        pins.i2cWriteNumber(lcd_addr, cmd, NumberFormat.UInt8BE)
        basic.pause(1)
    }

    function writeChar(ch: number): void {
        pins.i2cWriteNumber(lcd_addr, ch, NumberFormat.UInt8BE)
        basic.pause(1)
    }
}