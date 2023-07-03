import images from "./images"

const filtrosEspeciales = [
  {
      id: 0,
      label: "Incluye Ingredientes",
      icon: images.incluyeIngredientes
  },
  {
      id: 1,
      label: "Excluye ingredientes",
      icon: images.excluyeIngredientes
  },
  {
      id: 2,
      label: "Autor",
      icon: images.autor
  },
]

const fechaCarga = [
  {
      id: 0,
      label: "Mas reciente"
  },
  {
      id: 1,
      label: "Mas antigua"
  }
]

const ordenAlfabetico = [
  {
      id: 0,
      label: "Por usuario",
  },
  {
      id: 1,
      label: "Por receta",
  }
]

export const unidades = [
  {
    id: 0,
    unidad: 'gramos'
  },
  {
    id: 1,
    unidad: 'cucharadas'
  }
];

export default {
  ordenAlfabetico,
  fechaCarga,
  filtrosEspeciales,
  unidades
}