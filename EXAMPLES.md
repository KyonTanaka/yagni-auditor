# YAGNI Auditor v2.0 — Ejemplos de Uso

---

## Ejemplo 1: Auditar un CLAUDE.md (Configuración del Sistema)

### Escenario
Tu `CLAUDE.md` global tiene 368 líneas. Sospechas que hay ciclos ocultos y sobrepeso. Ejecutas YAGNI.

### Comando
```
/yagni-audit [lee tu CLAUDE.md]
```

### Reporte Generado
```
╔═════════════════════════════════════════════════════════════╗
║          YAGNI AUDIT REPORT — CLAUDE.md (Original)        ║
║                      Score: 6.2/10                         ║
╚═════════════════════════════════════════════════════════════╝

📊 RESUMEN EJECUTIVO
├─ Líneas Totales: 368
├─ Tablas de Auto-activación: 6
├─ Problemas Detectados: 7
├─ Token Tax Estimado: 1,840 tokens/sesión
└─ Reducción Potencial: 455 tokens (25%)

🔴 CRÍTICOS (Acción inmediata)

1. CATÁLOGO REDUNDANTE (Líneas 230–250)
   Problema: "Catálogo completo de skills" es puro directorio telefónico.
   Ya existe en secciones previas. Repetición innecesaria.
   → Acción: ELIMINAR estas líneas
   → Ahorro: -100 tokens/sesión

2. PARÁLISIS UI (5 SKILLS COMPITIENDO)
   Problema: Usuario pide "crea componente" → disparan:
   - /design-taste-frontend
   - /impeccable
   - /emil-design-eng
   - /frontend-design
   - ui-ux-pro-max
   La IA se paraliza decidiendo cuál usar.
   → Acción: Consolida a 2 máximo (emil-design-eng + impeccable)
   → Ahorro: -40 tokens/sesión

3. CICLOS DE ACTIVACIÓN OCULTOS (CRÍTICO)
   Problema: Brainstorming → Writing-Plans → Autoplan → Code-Review
   Cada skill lee CLAUDE.md completo (1,840 toks) = cascada de 5,520 toks
   → Acción: Elimina /autoplan (no es necesario después de writing-plans)
   → Ahorro: -1,840 tokens/cascada

4. SOLAPAMIENTO /review vs /code-review (95%)
   Problema: Ambos hacen lo mismo: revisar PRs antes de merge
   → Acción: Elimina /review, mantén /code-review
   → Ahorro: -20 tokens/sesión

🟡 MODERADOS (Próxima revisión)

5. TABLA PLUGINS (26 LÍNEAS)
   Problema: Directorio de 23 plugins, se carga en cada sesión sin contribuir a reglas.
   → Acción: Mover a archivo separado (PLUGINS_INSTALLED.md)
   → Ahorro: -130 tokens/sesión

6. REFERENCIAS CRUZADAS ANIDADAS
   Problema: Graphify → Suite Pro → Plugins → Orden Recomendado
   Usuario tiene que saltar entre 4 secciones para entender 1 concepto.
   → Acción: Colapsar en 1 sola tabla maestra

7. PROMESA INCUMPLIDA (SECCIÓN PONYTAIL MODE)
   Problema: Línea 30 dice "Auto-activación Total" pero solo ~20 de 66 skills
   son automáticos. El resto requieren contexto explícito.
   → Acción: Reescribir con honestidad: "No prometo total, solo obvio"

🟢 OK (SIN ACCIÓN)

- Graphify + Obsidian (Dos Pilares): Roles claros, ortogonales ✓
- Delegación de Modelos: Bien definida ✓
- Seguridad: MCP Sentinel v2 + security-guidance no chocan ✓

📋 CHECKLIST POST-AUDIT

□ CRÍTICO: Eliminar catálogo redundante (líneas 230–250)
□ CRÍTICO: Consolidar UI: elimina /design-consultation, /design-html, /design-review
□ CRÍTICO: Eliminar /autoplan (cascada hidden)
□ CRÍTICO: Colapsar en 1 tabla maestra (eliminar referencias cruzadas)
□ CRÍTICO: Reescribir línea 30 con honestidad
□ MODERADO: Mover tabla plugins a PLUGINS_INSTALLED.md
□ MODERADO: Simplificar fallbacks

📊 IMPACTO PROYECTADO

Antes (368 líneas):
  - Token Tax: 1,840 tokens/sesión
  - Cascadas: 2 (Superpowers + Feature-Dev)
  - Tablas: 6 (redundancia alta)
  - Score YAGNI: 6.2/10

Después de aplicar recomendaciones (105 líneas):
  - Token Tax: 1,385 tokens/sesión (-25%)
  - Cascadas: 0 (eliminadas)
  - Tablas: 1 maestra (sin redundancia)
  - Score YAGNI: 9.5/10

🎯 RECOMENDACIÓN FINAL

Tu CLAUDE.md está sobre-instrumentado. Aplica los 3 cambios críticos:
1. Colapsa en 1 tabla maestra
2. Reescribe promesas con honestidad
3. Elimina cascadas ocultas

Resultado: Configuración 70% más eficiente, sin pérdida de funcionalidad.
```

### Análisis del Reporte

Este reporte detectó:
- ✅ **Token Tax Silencioso:** 368 líneas que se cargan en cada sesión
- ✅ **Ciclos Ocultos:** Cascada Brainstorming → Writing-Plans → Autoplan
- ✅ **Catálogos de Ruido:** Directorio de skills sin reglas de activación
- ✅ **Parálisis por Análisis:** 5 skills de UI compitiendo

---

## Ejemplo 2: Auditar Antes de Instalar (Plugin Desconocido)

### Escenario
El usuario quiere instalar `super-awesome-plugin@latest`. Ejecuta YAGNI antes de instalar.

### Comando
```
/yagni-audit ¿Debo instalar super-awesome-plugin@latest?

Contexto:
- Promesa: "Haz UI 10x más rápido"
- Tamaño: 2.4 MB
- Dependencias: 47 librerías
- Última actualización: 6 meses
```

### Reporte Generado
```
╔═════════════════════════════════════════════════════════════╗
║      YAGNI AUDIT REPORT — Plugin Evaluation                ║
║                      Score: 3.2/10                         ║
╚═════════════════════════════════════════════════════════════╝

📊 RESUMEN EJECUTIVO
├─ Plugin: super-awesome-plugin@latest
├─ Score YAGNI: 3.2/10 ⚠️ BAJO
├─ Recomendación: RECHAZAR o buscar alternativa
└─ Razones Críticas: 3

🔴 CRÍTICOS

1. ESPECULATIVO (YAGNI clásico)
   Promesa: "UI 10x más rápido"
   Realidad: ¿Cuál es tu cuello de botella actual?
   - Si es CSS/layout → webpack ya hace esto
   - Si es JavaScript logic → refactoriza la lógica, no instales plugin
   - Si es componentes → usa emil-design-eng que ya tienes
   Veredicto: ¿REALMENTE lo necesitas? Probablemente no.

2. SOBREDIMENSIONADO
   - Tamaño: 2.4 MB para UI component lib (sospechoso)
   - Dependencias: 47 librerías (frente a stdlib que tiene <5)
   - Overhead: Cada import carga las 47 transitive deps
   Veredicto: Sobrecarga innecesaria.

3. FALTA DE MANTENIMIENTO
   - Última actualización: 6 meses
   - En ecosistema frontend, 6 meses = abandono
   - Sin actualizaciones, vulnerabilidades acumuladas
   Veredicto: Riesgo de seguridad.

🟡 MODERADOS

4. CONFLICTO CON EXISTENTES
   - Ya tienes: `/emil-design-eng` (animaciones), `/impeccable` (audit visual)
   - Este plugin: También maneja animaciones + visual polish
   - Solapamiento: 70% de funcionalidad duplicada
   Veredicto: Redundancia.

5. COMPLEJIDAD OCULTA
   - Promesa "UI 10x más rápido" es marketing
   - Sin benchmarks concretos, no sé qué esperar
   - Riesgo: Instalo, no veo mejora, ahora tengo 2.4 MB innecesarios
   Veredicto: Incertidumbre.

🟢 OK

- Licencia MIT (compatible) ✓
- Repositorio público (código auditable) ✓

📋 DECISIÓN FINAL

❌ RECHAZAR super-awesome-plugin@latest

Razones:
1. Especulativo (no está comprobado que lo necesites)
2. Sobredimensionado (47 deps para UI)
3. Sin mantenimiento (6 meses = abandono)
4. Duplica funcionalidad existente

✅ ALTERNATIVAS

1. `/emil-design-eng` (ya tienes, ya funciona)
2. Webpack + CSS-in-JS nativo (stdlib, 0 deps)
3. Refactor de lógica (el verdadero cuello de botella)

Si REALMENTE quieres "UI 10x más rápido":
→ Benchmark actual de lentitud
→ Medir dónde se gasta el tiempo (profiling)
→ Aplicar optimizaciones quirúrgicas sin nuevo plugin
→ Medir mejora

Este flujo es más caro arriba pero barato abajo (sin deuda técnica).
```

### Análisis del Reporte

Este reporte detectó:
- ✅ **Especulación (YAGNI clásico):** Plugin no comprobado como necesario
- ✅ **Sobredimensionamiento:** 47 deps para una librería de UI
- ✅ **Falta de Mantenimiento:** 6 meses sin actualizaciones
- ✅ **Solapamiento:** Duplica funcionalidad existente

---

## Ejemplo 3: Auditar Cascada de Skills (Ciclos Amplificadores)

### Escenario
El usuario diseña una feature nueva. Su flujo de trabajo es:

1. Pide: "Diseña feature de autenticación"
2. Claude invoca: `/superpowers:brainstorming`
3. Brainstorming recomienda: `/superpowers:writing-plans`
4. Writing-plans recomienda: `/autoplan`
5. Autoplan recomienda: `/code-review`
6. Code-review recomienda: `/pr-review-toolkit`

Ejecuta YAGNI para detectar si hay amplificación de costo.

### Reporte Generado
```
╔═════════════════════════════════════════════════════════════╗
║    YAGNI AUDIT REPORT — Skill Activation Cascade          ║
║                   Score: 2.1/10 CRÍTICO                    ║
╚═════════════════════════════════════════════════════════════╝

📊 RESUMEN EJECUTIVO
├─ Cascada Detectada: 6 skills encadenados
├─ Token Cost (una sola petición): 11,040 tokens
├─ Overhead (sin cascada): 1,840 tokens
├─ Amplificación: 6x (¡MUY ALTO!)
└─ Recomendación: ROMPER cascada

🔴 CRÍTICOS

CASCADA AMPLIFICADORA DETECTADA:

Usuario: "Diseña feature de autenticación"
  ↓ Lee CLAUDE.md: 1,840 tokens
  
/superpowers:brainstorming (1)
  ↓ Recomienda Writing-Plans
  
/superpowers:writing-plans (2)
  ↓ Lee CLAUDE.md NUEVAMENTE: 1,840 tokens
  ↓ Recomienda Autoplan
  
/autoplan (3)
  ↓ Lee CLAUDE.md NUEVAMENTE: 1,840 tokens
  ↓ Recomienda Code-Review
  
/code-review (4)
  ↓ Invoca pr-review-toolkit INTERNAMENTE
  
/pr-review-toolkit (5)
  ↓ Invoca 6 agentes (type-design, silent-failure, etc.)

TOTAL: 5 skills + 6 agentes internos = 11 agentes en cascada
LECTURA DE CLAUDE.md: 3 veces = 5,520 tokens de configuración sola

ANÁLISIS:

- Brainstorming → Writing-Plans: ✓ Complementarios (razonable)
- Writing-Plans → Autoplan: ⚠️ Redundancia (ambos hacen planificación)
- Autoplan → Code-Review: ✗ EXCESIVO (salto de contexto enorme)
- Code-Review → PR-Review-Toolkit: ✗ INNECESARIO (ya incluido en pr-review-toolkit)

Veredicto: CASCADA PATOLÓGICA. Se lee CLAUDE.md 3 veces en 1 petición.

🟡 MODERADOS

1. CONTEXTO PERDIDO ENTRE SKILLS
   Brainstorming genera plan → Writing-Plans lo regenera
   Autoplan lo regenera OTRA VEZ → código result es diferente cada vez

2. COSTO ACUMULADO
   6 skills × (overhead de lectura/escritura) = overhead masivo
   Alternativa: 1 solo skill `/feature-dev` que hace todo en paralelo

🟢 OK

- Cada skill individual está bien diseñado ✓
- El problema es la SECUENCIA, no los skills ✓

📋 DECISIÓN Y RECOMENDACIÓN

❌ ACTUAL (patológico):
/brainstorming → /writing-plans → /autoplan → /code-review → /pr-review-toolkit
Costo: 11,040 tokens
Resultado: Sobreplaneado, sobrerevisado, contexto perdido

✅ RECOMENDADO:
/feature-dev (workflow 7-fases, todo en paralelo, 1 lectura de config)
Costo: 2,200 tokens
Resultado: Mismo output, 5x más barato

O SI NO QUIERES /feature-dev:

Petición 1: /brainstorming (solo)
Petición 2: /writing-plans (solo, después de leer el plan)
Petición 3: Escribir código
Petición 4: /code-review (después, si lo necesitas)

Separar las peticiones = cada una lee config 1 sola vez.
Total: 7,360 tokens (vs. 11,040 en cascada automática)
```

---

## Resumen de Ejemplos

| Caso | Score YAGNI | Recomendación |
|---|---|---|
| **CLAUDE.md Original** | 6.2/10 | Colapsar en tabla maestra, romper cascadas |
| **Plugin Desconocido** | 3.2/10 | Rechazar (especulativo, sobredimensionado) |
| **Cascada de Skills** | 2.1/10 | Usar `/feature-dev` en paralelo, no en cascada |

---

## Cómo Usar YAGNI en Tu Flujo

1. **Antes de instalar:** `/yagni-audit "¿Necesito X?"`
2. **Después de agregar skills:** `/yagni-audit [tu CLAUDE.md]`
3. **Mensualmente:** Auditoría preventiva del sistema completo
4. **Tras cada gran cambio:** Verifica que no introdujiste cascadas nuevas

---

## Notas

- Los tokens mostrados son estimaciones. Tu modelo específico puede variar.
- YAGNI es una herramienta de análisis estático, no dinámico.
- Siempre revisa manualmente antes de aplicar recomendaciones en producción.
