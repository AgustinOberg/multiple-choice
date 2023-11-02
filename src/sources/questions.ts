import { Question } from "@/types/question";

const questions: Question[] = [
  {
    id: 1,
    order: 1,
    question: "¿Cuál es el objetivo principal de la Educación Sexual Integral?",
    options: [
      {
        value: "a",
        label: "Promover la diversidad de género y la inclusión",
        isCorrect: true,
      },
      { value: "b", label: "Enseñar anatomía y fisiología sexual" },
      { value: "c", label: "Fomentar el celibato entre los jóvenes" },
      { value: "d", label: "Ninguna de las anteriores" },
    ],
  },
  {
    id: 2,
    order: 2,
    question: "¿Por qué es importante la perspectiva de género en la ESI?",
    options: [
      {
        value: "a",
        label:
          "Porque reconoce la influencia del género en las experiencias de las personas",
        isCorrect: true,
      },
      {
        value: "b",
        label: "Porque impulsa a las personas a ocultar su género",
      },
      { value: "c", label: "Porque no tiene relevancia en la ESI" },
      { value: "d", label: "Porque crea confusiones innecesarias" },
    ],
  },
  {
    id: 3,
    order: 3,
    question: "¿Cuál es el rol de los docentes en la implementación de la ESI?",
    options: [
      {
        value: "a",
        label: "Facilitar un entorno de aprendizaje seguro y respetuoso",
        isCorrect: true,
      },
      { value: "b", label: "No tienen ningún rol en la ESI" },
      { value: "c", label: "Promover la discriminación y el acoso" },
      { value: "d", label: "Ignorar las preguntas de los estudiantes" },
    ],
  },
  {
    id: 4,
    order: 4,
    question:
      "¿Cuál es el propósito de promover la toma de decisiones informadas en la ESI?",
    options: [
      {
        value: "a",
        label:
          "Ayudar a las personas a tomar decisiones saludables sobre su sexualidad y relaciones",
        isCorrect: true,
      },
      {
        value: "b",
        label: "Forzar a las personas a tomar decisiones específicas",
      },
      { value: "c", label: "Evitar que las personas tomen decisiones" },
      { value: "d", label: "No tiene ningún propósito en la ESI" },
    ],
  },
];

export default questions;
