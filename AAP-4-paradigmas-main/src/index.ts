
import * as readline from "readline";



export type Estado = "pendiente" | "en_curso" | "terminada" | "cancelada";
export type Dificultad = "facil" | "medio" | "dificil";

export interface Tarea {
  readonly id: number;
  readonly titulo: string;
  readonly descripcion?: string;
  readonly estado: Estado;
  readonly creacion: Date;
  readonly ultimaEdicion: Date;
  readonly vencimiento?: Date;
  readonly dificultad: Dificultad;
}



const crearTarea = (
  lista: readonly Tarea[],
  titulo: string,
  descripcion: string = "",
  estado: Estado = "pendiente",
  dificultad: Dificultad = "facil",
  vencimiento?: Date
): readonly Tarea[] => {
  const nuevaTarea: Tarea = Object.freeze({
    id: lista.length + 1,
    titulo,
    descripcion,
    estado,
    creacion: new Date(),
    ultimaEdicion: new Date(),
    vencimiento,
    dificultad,
  });
  return [...lista, nuevaTarea];
};

const buscarTareas = (lista: readonly Tarea[], termino: string): readonly Tarea[] =>
  lista.filter((t) => t.titulo.toLowerCase().includes(termino.toLowerCase()));

const filtrarPorEstado = (lista: readonly Tarea[], estado: Estado): readonly Tarea[] =>
  lista.filter((t) => t.estado === estado);

const actualizarTarea = (
  lista: readonly Tarea[],
  id: number,
  cambios: Partial<Tarea>
): readonly Tarea[] =>
  lista.map((t) =>
    t.id === id
      ? Object.freeze({
          ...t,
          ...cambios,
          ultimaEdicion: new Date(),
        })
      : t
  );

const ordenarPorFecha = (lista: readonly Tarea[]): readonly Tarea[] =>
  [...lista].sort((a, b) => a.creacion.getTime() - b.creacion.getTime());



const mostrarTarea = (t: Tarea): string =>
  `#${t.id} | ${t.titulo} [${t.estado}] (${t.dificultad})`;

const mostrarLista = (lista: readonly Tarea[]): void => {
  if (lista.length === 0) console.log("No hay tareas cargadas.\n");
  else lista.map(mostrarTarea).forEach((t) => console.log(t));
};



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = (q: string): Promise<string> =>
  new Promise((res) => rl.question(q, (ans) => res(ans.trim())));


// Main

async function main(): Promise<void> {
  let tareas: readonly Tarea[] = Object.freeze([]);

  let opcion: string;
  do {
    console.log("\n=== LISTA FUNCIONAL DE TAREAS ===");
    console.log("[1] Ver tareas");
    console.log("[2] Buscar tarea");
    console.log("[3] Agregar tarea");
    console.log("[4] Filtrar por estado");
    console.log("[0] Salir");
    opcion = await input("> ");

    switch (opcion) {
      case "1":
        mostrarLista(ordenarPorFecha(tareas));
        break;

      case "2": {
        const termino = await input("Buscar por título: ");
        mostrarLista(buscarTareas(tareas, termino));
        break;
      }

      case "3": {
        const titulo = await input("Título: ");
        const descripcion = await input("Descripción: ");
        const dificultad = (await input("Dificultad [facil/medio/dificil]: ")) as Dificultad;
        tareas = crearTarea(tareas, titulo, descripcion, "pendiente", dificultad);
        console.log("Tarea creada.");
        break;
      }

      case "4": {
        const estado = (await input("Estado [pendiente/en_curso/terminada/cancelada]: ")) as Estado;
        mostrarLista(filtrarPorEstado(tareas, estado));
        break;
      }

      case "0":
        console.log("Saliendo...");
        break;

      default:
        console.log("Opción no válida");
    }
  } while (opcion !== "0");

  rl.close();
}

main();