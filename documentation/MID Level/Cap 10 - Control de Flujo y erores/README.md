# **Control de Flujo y manejo de errores**

El control de flujo y manejo de errores, nos sirve en gran medida, para poder controlar la manera en la que los errores y sus procedimientos se comportan durante la ejecución de un Script. De manera que podamos determinar lo que ocurre exactamente si por ejemplo en nuestro sitio un botón nos acaba lanzando un error y lo que ocurre una vez este error ha sido recibido.

De modo que tenemos un control del flujo de nuestro Script, permitiendonos determinar que hacer en absolutamente cualquier caso de error y como reaccionara el programa ante ello.

## **Temario**
1. Controld e flujo y manejo de errores
    * Sentencia de bloque.
    * Sentencias de controld e flujo.
    1. Sentencia Switch.
        * Sintaxis y clausula case.
        * Break.
        * Default.

2. Sentencias de manejo de excepciones.
    * Tipos de Excepciones

3. Try... Catch
    * Sintaxis
    * Objeto error
    * Catch Incondicional
    * Catch Condicional
    * Finally
    * Sentencia Throw


___

### **¿Qué es el flujo?**
Se llama flujo de control al orden en el que se ejecutan las instrucciones de un programa, siendo las propias instrucciones las que determinan la manera en que este se lleva a cabo.

En un programa, a menos que el flujo de control se vea modificado por una instrucción de control, las instrucciones siempre se ejecutan secuencialmente, una detrás de otra, en orden de aparición, de izquierda a derecha y de arriba abajo, que es el flujo natural de un programa.

Sin embargo existen ciertas instrucciones que nos permitien agergarle cierta interacción a este flujo permitiendonos saltar a ciertas partes del código en caso de que ocurra algun hecho en especifico. Estas instrucciones son las **estructuras condicionales**, por ejemplo, 

>"Si ocurre esto, realiza la siguiente acción, caso contrario entonces realiza esta otra"

Permitiendonos así mantener un control del orden en que se ejecutan las instrucciones o los casos en los que se ejecutaran estas mismas.

#### **Ejemplo de control de flujo**

```javascript
let nombre = "Pedro";
alert("nombre");
```
En este caso, el flujo sera el siguiente. Primero se le asginará el dato "Pedro" a la **variable** nombre. Y una vez hecho, se mostrará a través de un `alert()` el dato que previamente fue asignado sin importar qué.

Ahora ¿Cómo haríamos si por ejemplo queremos mostrar ese nombre pero solo en un caso en particular? Nos apoyamos en una estructura de control de flujo, como el `if{} else{}`

```javascript
let nombre = "Pedro"
if (3 > 5) {
    alert("nombre");
}
```
En este caso utlizamos la sentencia `if` para decirle al programa:
>Si 3 es mayor que 5 entonces muestrame el contenido de la variable nombre a través de un alert.

Dado que 3 no es mayor que cinco, entonces esta instrucción no se ejecutara aun cuando sea la siguiente instrucción en el flujo del programa. De esta manera controlamos el flujo a través del cual se ordenan las instrucciones a ejecutarse.

## **Sentencias de Bloque**
Esto hace referencias a aquellas sentencias que, tras separar un conjunto de instrucciones en un bloque, permiten un control minimo del flujo permitiendonos por ejemplo, declarar una variable para operar dentro de su contexto, y luego poder declararla una vez mas fuera para que cumpla otro proposito.

>Cabe destacar que quizá esto no sea para nada optimo, despues de todo si una variable sera usada tanto dentro como fuera podría declararse como una variable global usando `var` pero es importnate tenerlo en cuenta

#### **Ejemplo**
```javascript
let nombre = "Juan";
{
    let nombre = "Petro";
    alert(nombre);
}
alert(nombre);
```
Esto nos arrojara como resultado en el alert, que primero se nos muestre el nombre Pedro y luego Juan. Debido a que el interprete detecta el bloque, y toma las intrucciones que estan dentro como parte de una instancia del programa en si, y la variable al estar declarada con let solo existira en el interior de este bloque. De mnera que nos permite declarar la variable dos veces y mostrar primero lo que se haya dentro y luego el nombre declarado fuera.

Evidentemente si el alert exterior hubiese estado colocado por encima del bloque, esté se habría ejecutado antes, de allí lo de *"permiten un control minimo del flujo"*.

>[Vease mas información sobre el Scope de Javascript](https://www.w3schools.com/js/js_scope.asp "W3School Scope")

## **Sentencias de Control de Flujo**

En estas sentencias se nos permite controlar de manera mas amplia el flujo del programa, y es en esta sección donde se encuentran los [condicionales](https://www.javascript.com/learn/conditionals "JavaScript Conditional Examples") que nos ayudaran a evaluar una condición para determinar si una instrucción debe ser ejecutada o no.

#### **Example**
```javascript
if (3 > 2) {
    alert ("es cierto");
}
```
Esta sentencia evaluara nuestra condición hallada entre los parentesis. Si la condición da como resultado `true` entonces lo que se haya dentro del bloque se ejecutara; por el contrario si resulta `false` entonces saltara el bloque y no ejecutara sus instrucciones. En este caso el resultado es `true,` dado que 3 es mayor que 2.

## **Sentencia `Switch`**

La declaración de switch evalúa una expresión, haciendo coincidir el valor de la expresión con una cláusula de caso, y ejecuta declaraciones asociadas con ese caso.

Una sentencia switch primero evalúa su expresión. Luego busca la cláusula del primer caso cuya expresión se evalúa como el mismo valor que el resultado de la expresión de entrada (usando una comparación estricta, ===) y transfiere el control a esa cláusula, ejecutando las sentencias asociadas. (Si varios casos coinciden con el valor proporcionado, se selecciona el primer caso que coincida, incluso si los casos no son iguales entre sí). Si no se encuentra ninguna cláusula de caso coincidente, el programa busca la cláusula predeterminada opcional y, si la encuentra, la transfiere el control a esa cláusula, ejecutando las sentencias asociadas. Si no se encuentra una cláusula por defecto, el programa continúa la ejecución en la declaración que sigue al final del cambio. Por convención, la cláusula predeterminada es la última cláusula, pero no es necesario que sea así.

#### **Ejemplo**

```javascript
switch (expr) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
    case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
    case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
    default:
        console.log("Sorry, we are out of " + expr + ".");
        
}

console.log("Is there anything else you'd like?");
```
En el anterior ejemplo la sentencia Switch recibira una expresión, y comenzara a evaluar si esa expresión coincide con alguno de los casos propuestos, de ser así ejecutara el bloque de código que contenga e inmediatamente detendra las evaluaciones y saltara el resto. En caso de no conseguir coincidencias ejecutara lo que se encuentra dentro del caso `default:` Y en caso de que defailt no se encontrase, saltaría directamente al `console.log()` hallado luego de él bloque de código.

### `Break`
Esta sentencía detiene la ejecución de las evaluaciones del `switch` finalizando con el bloque de código para así continuar el programa. Si esta sentencia no se coloca al final de cada caso, exceptuando el ultimo, se evaluaran y ejecutaran todas las sentencías que no deseamos que se ejecuten.

### `default:`
Esto nos sirve para colocar un caso como predeterminado, en caso de que el `switch` no halle ninguna coincidencia en su evaluación.

>Para mayor información visitar la web de MDN: [Sentencia Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch "Mozilla Development Network")

## **Sentencias de Manejo de Excepciones**

Una excepción es:
>un imprevisto que ocurre durante la ejecución de un programa; anormalidades que impiden o alteran el comportamiento o flujo normal de un software.

De modo que las **Sentencias de Manejo de Excepciones en JavaScript** Son sentencias, que como veníamos hablando en un principio, nos permiten manejar la manera en la que el programa se comporta cuando se encuentra con estos eventos imprevistos y que afectan el flujo de nuestro programa.

#### **Ejemplo**
```javascript
if (3 > 2){
    ahsjdakhdj;
}
```
Esto nos arrojaria como resultado el siguiente mensaje de error derivado de la excepción ocasionada:

![Uncaught ReferenceError: ahsjdakhdj is not defined
    at script.js:2:5](https://i.postimg.cc/Vv8sRj61/screenshot-exception.png "JavaScript Exception Message")

### Tipos de excepciones.
Existen dos tipos de excepciones fundamentales: Aquellos que hacen referencia a un error en cuanto a las especificaciones de ECMAScript. Y aquellos errores que hacen referencia a algun objeto del DOM. Dependiendo de estos hay una inmensa cantidad de tipo de excepciones, aquellos listados en la web de Mozilla Developer Network seran adjuntados a continuación:

1. ECMAScript Exception Reference.
    * [Error](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error "Error")
    * [EvalError](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/EvalError "EvalError")
    * [InternalError](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/InternalError "InternalError")
    * [RangeError](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/RangeError "RangeError")
    * [ReferenceError](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError "ReferenceError")
    * [SyntaxError](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError "SyntaxError")
    * [TypeError](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error "TypeError - MDN Not Found")
    * [URIError](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/URIError "URIError")
2. DOM Exception Reference.
    * [DOMException](https://developer.mozilla.org/en-US/docs/Web/API/DOMException)
3. DOM Error Reference
    * [DOMError](https://developer.mozilla.org/en-US/docs/Web/API/DOMError)

## Try... Catch
La sentencia Try... Catch se trata de una herramienta que le permite al desarrollador poder manejar de forma dinamica los errores que puedan llegar a sucitarse en determinado punto del código. El mismo se compone de una estructura simple.
```javascript
try {

}
catch(error){
    console.log(error);
}
```
Dentro del bloqué try es el lugar donde puede llegar a ocurrir el error que buscamos manejar. En caso de que el error ocurra, contrario a ejecutarse el *event handler* que da como resultado un mensaje de error en consola; el error es enviado como parámetro al catch permitiendonos decidir que hacer con ese error recibido, por ejemplo, mostrando un mensaje de error personalizado y mcuho mas intuitivo.

Ademas se debe tener en cuenta que los errores que podemos manejar usando el try... catch son errores de referencia como los citados anteriormente. No obstante los errores de sintaxis por ejemplo no vienen contemplados dentro de estos, por lo que los mismos si nos mostraran un mensaje de error predeterminado en la consola.

### Catch incondicional
Se trata de un mero concepto. Los catch pueden contener bloques de código tan complejos como nuestros programas en si mismos. Por lo que las estructuras condicionales forman parte de ellos. Un **Catch Incondicional** se trata de un Catch que una vez recibido el error dentro de el código a ejecutar no hace uso de ninguna condición que lo invite a hace runa u otra cosa dependiendo de los datos que reciba o posea.

### Catch Condicional
Mientras que por otro lado el **Catch condicional** es su directo opuesto. Se trata de un Catch que a la hora de manejar y(o tratar al error hace uso de estructuras condicionales para operar los datos y mostrar diversos resultados en torno a esto.

## Finally
Se trata de una sentencia adicional que va colocada luego del catch que lo que hace es ejecutar código sin importar si existe o no un error dentro del código.

```javascript
try {
    asdad;
}
catch(error){
    console.log(error);
}
finally{
    console.log("Fin del programa.");
}
```

En este ejemplo sin importar si se recibio y manejó o no un error el mensaje `Fin del programa` se mostrará de igual manera.

Entre las carácteristicas de Finally además se encuentra la capacidad de sobreescribir el valor retornado de una función. Miremos otro ejemplo:

```javascript
const testTry ()=>{
    try {
        return 1
    } catch(e){
        return 2
    } finally {
        return 3;
    }
}
```

La norma general nos dice que una vez se haya ejecutado el primer return el resto del código no debería ejecutarse. Pero ocurre que el finally puede ir incluso mas alla de eso, ejecutandose de todas formas y hasta sobreescribiendo valor retornado. De manera que al hacer un `console.log(testTry);` nos mostrará el número `3`.

## Throw
La sentencía throw lo que nos permite es poder lanzar nuestras propias excepciones a través de JavaScript. Estas pueden contener un valor, númerico, booleano, un string, un array, o incluso un objeto.

Si Throw se encuentra dentro del try este sera tomado como una excepción producto de un "error" ocurrido y sera enviado al catch como parametro, el cual podrá manejarlo de cualquier forma.

### Ejemplo
```javascript
try {
    throw {
        error: "Nombre del Error",
        info: "Información del error"
    } catch (e) {
        console.log(e);
    }
}
```
Este bloqué de código dara como resultado que se muestre en consola un objeto con dos propiedaes. Error e info que contienen la informaciónq ue se les fue conferida.

## ¿Cuando es recomendable usar Try... Catch?
El uso de Try & Catch en JavaScript si bien es bastante util debería evitarse usar lo menos posible. No obstante si te encuentras desarrollando, y notas que hay un bloqué de código donde si bien todo parece bien a simple vista, pero existe una pequeña posibildiad de que se de lugar a una excepción. Entonces utilizamos try... catch de modo que podamos manejar a nuestro antojo la excepción recibida y así poder operar en base a ella.  