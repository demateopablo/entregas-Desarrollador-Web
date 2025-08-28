Diseñá un diagrama ER que contemple las siguientes entidades y relaciones. Fecha de entrega 1-9-2025

- **Usuarios**
  - ID (PK)
  - Nombre
  - Apellido
  - Email
  - Rol (estudiante o instructor)

- **Cursos**
  - ID (PK)
  - Título
  - Descripción
  - Fecha de inicio
  - Duración (en semanas)
  - ID del instructor (FK)

- **Inscripciones**
  - ID (PK)
  - Fecha de inscripción
  - ID del curso (FK)
  - ID del usuario (FK)

- **Lecciones**
  - ID (PK)
  - Título
  - Contenido
  - ID del curso al que pertenece (FK)

### Relaciones:
- Un usuario puede estar inscrito en varios cursos (si es estudiante).
- Un curso puede tener muchos usuarios inscritos.
- Un curso está creado por un solo instructor.
- Un curso tiene múltiples lecciones.
- Cada lección pertenece a un único curso.
