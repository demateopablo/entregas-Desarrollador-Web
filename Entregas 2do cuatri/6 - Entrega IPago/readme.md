# Ejercicio entregable - 28/04

## Consigna:

- Al código trabajado en clase con la interfaz `IPago`, implementarle las clases Transferencia y MercadoPago.

```ts
interface IPago {
    procesarPago(): void;
    cancelarPago(): void;
    generarRecibo(): void;
}
```