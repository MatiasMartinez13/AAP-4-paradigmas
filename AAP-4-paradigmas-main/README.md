# Ejercicio 1-Análisis de JavaScript con POO basada en prototipos según Kuhn 

Este documento analiza el lenguaje JavaScript acotado al paradigma de programación orientada a objetos basada en prototipos, utilizando los cuatro componentes de un paradigma según Kuhn.

## 1. Generalización simbólica

La generalización simbólica se refiere a las reglas, símbolos y estructuras que definen cómo se expresan los programas en un lenguaje. En JavaScript, acotado a POO basada en prototipos, estas reglas incluyen:

* Uso de **funciones constructoras** para crear objetos.

* Definición de métodos compartidos mediante el **prototipo**.

* Creación de instancias de objetos con `new`.

* Manipulación dinámica de propiedades y métodos de objetos.

Estas reglas permiten abstraer entidades y comportamientos sin necesidad de clases, siguiendo el modelo de POO basada en prototipos.

---

## 2. Creencias de los profesionales

Los desarrolladores consideran que JavaScript con prototipos ofrece ventajas frente a otros lenguajes orientados a objetos:

* **Flexibilidad**: los objetos pueden modificarse en tiempo de ejecución.
* **Ligereza**: no requiere estructuras rígidas de clases.
* **Reutilización eficiente**: los métodos se almacenan en prototipos, reduciendo el consumo de memoria.
* **Compatibilidad universal**: ejecutable en navegadores y Node.js.

---

## 3. Valores compartidos

Dentro de la comunidad se valora:

* Simplicidad en la creación de objetos y la mezcla de paradigmas.
* Reutilización de código mediante prototipos.
* Adaptabilidad a distintos entornos.
* Interoperabilidad con APIs y librerías existentes.

---

## 4. Ejemplos compartidos

El paradigma se transmite mediante ejemplos comunes:

* Funciones constructoras con métodos en prototipo.
* Delegación de comportamiento a través de prototipos.
* Herencia prototípica.
---

**Nota:** No se utilizó herencia clásica ni polimorfismo basado en clases porque el enfoque prototípico de JavaScript permite delegación y reutilización sin necesidad de clases tradicionales.

---

# Ejercicio 4 - Programación Orientada a Objetos (OOP)

Este proyecto implementa una aplicación de consola para la gestión de
tareas utilizando **TypeScript** y el paradigma de **Programación
Orientada a Objetos basada en prototipos**.

##  Características de la OOP utilizadas

### 1. Abstracción

Se representa el concepto de **Tarea** como un objeto con sus propios
datos y comportamientos, facilitando el manejo de entidades del mundo
real.

### 2. Encapsulamiento

Los datos y funciones relacionadas con la tarea se agrupan dentro del
mismo objeto, controlando el acceso mediante métodos como
`cambiarEstado()`.

### 3. Reutilización mediante prototipos

Los métodos se definen en el **prototipo** para que todas las instancias
de `Tarea` compartan comportamiento sin duplicar código.

### 4. Instanciación

Cada tarea creada por el usuario es una nueva instancia del objeto
`Tarea`, lo que permite trabajar con múltiples elementos independientes.

### 5. No se utilizó herencia ni polimorfismo

El programa no requiere jerarquías de clases ni comportamientos
dinámicos, por lo que no fue necesario utilizar estos principios.
