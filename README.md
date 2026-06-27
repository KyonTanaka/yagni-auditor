# YAGNI Auditor v2.0 — Auditor de Sistemas de Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)]()
[![Version: 2.0](https://img.shields.io/badge/Version-2.0-blue)]()
[![Skill: Claude Code](https://img.shields.io/badge/Skill-Claude%20Code-purple)]()

**"You Aren't Gonna Need It" — Auditoría inteligente de dependencias, configuraciones y sistemas de skills.**

---

## ¿Qué es YAGNI Auditor v2.0?

Herramienta de auditoría estática que detecta:

1. **Instalaciones innecesarias** (YAGNI clásico)
2. **Token Tax Silencioso** — Archivos/configuración que se cargan innecesariamente en cada interacción
3. **Ciclos de Activación Amplificadores** — Skills que se activan en cascada, multiplicando costo cognitivo
4. **Catálogos de Ruido** — Tablas/listas que son "directorio telefónico", no "reglas de comportamiento"
5. **Parálisis por Análisis** — Múltiples opciones compitiendo por la misma tarea

### Casos de Uso

- ✅ Auditar antes de instalar nuevo plugin/dependencia
- ✅ Auditar sistema de skills ya instaladas (detectar over-engineering)
- ✅ Revisar configuraciones (ej: `CLAUDE.md`) para encontrar ciclos ocultos
- ✅ Optimizar costo de token en prompts del sistema

### Casos que NO cubre

- ❌ Análisis dinámico (requeriría ejecutar código, lo cual es inseguro)
- ❌ Detección de malware (para eso usa `/mcp-sentinel`)
- ❌ Auditoría de código de aplicación (usa `/code-review`)

---

## Filosofía: Análisis Estático Puro

YAGNI v2.0 es **100% análisis estático**. Nunca ejecuta código de terceros, nunca envía datos a servidores, nunca incluye telemetría.

El auditor lee:
- Descripciones de prompts
- Nombres de skills/dependencias
- Manifiestos (JSON, YAML, Markdown)
- Archivos de configuración (CLAUDE.md, package.json, etc.)

El auditor NO:
- Descarga ni ejecuta binarios
- Abre conexiones de red salientes (excepto GitHub API, si es crítico)
- Recopila datos de usuarios (cero telemetría)
- Modifica configuración sin aprobación explícita

---

## Instalación Rápida

### Opción 1: Copiar archivo (Recomendado)
```bash
# Clone o descargue el repo
git clone https://github.com/KyonTanaka/yagni-auditor.git
cd yagni-auditor

# Copie el skill a su directorio de skills
cp yagni-audit.md ~/.claude/skills/
```

### Opción 2: Descarga directa
```bash
# Descargue solo el skill
curl -L https://raw.githubusercontent.com/KyonTanaka/yagni-auditor/main/yagni-audit.md \
  -o ~/.claude/skills/yagni-audit.md
```

### Opción 3: Copiar manualmente
1. Descargue `yagni-audit.md` desde [releases](https://github.com/KyonTanaka/yagni-auditor/releases)
2. Copie a `~/.claude/skills/yagni-audit.md`

### Verificar instalación
```bash
ls -la ~/.claude/skills/yagni-audit.md
```

### Usar el skill
```
Usuario: "Audita mi CLAUDE.md"
Claude: "/yagni-audit [archivo a auditar]"
```

---

## Uso Rápido

### Auditar antes de instalar

```
Usuario: "Quiero instalar XYZ"
Claude: "/yagni-audit ¿Es necesario XYZ?"
Reporte: "Análisis YAGNI → Recomendación (instalar / rechazar / alternativa nativa)"
```

### Auditar sistema existente

```
Usuario: "Revisa mi CLAUDE.md para detectar ciclos ocultos"
Claude: "/yagni-audit [lee CLAUDE.md]"
Reporte: 4 fases de análisis + recomendaciones de optimización
```

---

## Las 4 Fases de Auditoría

### Fase 1: Mapa de Carga (Token Tax)
**Pregunta:** ¿Qué se carga en CADA interacción sin que lo pidas?

Identifica archivos/configuraciones que pesan tokens aunque los olvides.

### Fase 2: Catálogo vs. Comportamiento
**Pregunta:** ¿Es regla de acción o puro directorio telefónico?

Distingue entre "instrucciones que cambiarán cómo Claude actúa" vs. "listas que no aportan nada".

### Fase 3: Parálisis por Análisis
**Pregunta:** Si pido "crea X", ¿cuántas opciones compiten?

Detecta cuando múltiples skills hacen lo mismo y la IA gasta tokens decidiendo cuál usar.

### Fase 4: Ciclos de Activación Ocultos (NEW)
**Pregunta:** ¿Hay skills que se invocan entre sí, amplificando costo?

Detecta cascadas como: Brainstorming → Writing-Plans → Autoplan → Code-Review.

---

## Disclaimer Legal (Importante)

⚠️ **Responsabilidad Limitada**

YAGNI Auditor es una herramienta de análisis estático y recomendación. **No se hace responsable** por:

- Pérdida de datos o configuraciones eliminadas erróneamente
- Interrupciones de servicio derivadas de cambios aplicados sin revisión manual
- Daños económicos o reputacionales por seguir recomendaciones sin validar

**Uso obligatorio:**
1. Revisa SIEMPRE los reportes de auditoría antes de aplicar cambios
2. En entornos de producción, valida manualmente cada recomendación
3. Mantén backups de configuración antes de cambios significativos
4. YAGNI Auditor es una **segunda opinión**, no una decisión final

**Licencia:** MIT. Ver LICENSE para términos completos.

---

## Características de Seguridad

✅ **Cero Telemetría**
- No se recopilan datos de usuarios
- No hay conexiones a servidores externos (excepto GitHub API si es necesario)
- Procesamiento 100% local

✅ **Análisis Estático**
- Nunca ejecuta código de terceros
- No instala dependencias durante auditoría
- Basado en lectura de manifiestos y prompts

✅ **Transparencia**
- Código fuente disponible y auditable
- Reporte detallado de cada decisión
- Sin decisiones "mágicas"

---

## Ejemplos de Uso

Ver `EXAMPLES.md` para:
- Auditar un CLAUDE.md y detectar cascadas
- Auditar antes de instalar nuevo plugin
- Auditar un ecosistema de skills completo

---

## Reportes YAGNI v2.0

Cada auditoría genera reporte con:

```
╔═════════════════════════════════════════════════════════════╗
║              YAGNI AUDIT REPORT — v2.0                    ║
╚═════════════════════════════════════════════════════════════╝

📊 RESUMEN EJECUTIVO
├─ Items Auditados: N
├─ Problemas Detectados: M
├─ Score YAGNI: X/10
└─ Recomendaciones: K

🔴 CRÍTICOS (Acción inmediata)
├─ [Problema 1]
└─ [Problema 2]

🟡 MODERADOS (Próxima revisión)
├─ [Problema 3]
└─ [Problema 4]

🟢 OK (Sin acción)
└─ [Hallazgo positivo]

📋 CHECKLIST POST-AUDIT
□ Implementar recomendación 1
□ Implementar recomendación 2
```

---

## Versión

- **v2.0** (2026-06-27): Detección de ciclos ocultos, token tax silencioso, catálogos de ruido
- **v1.0** (anterior): 4 barreras básicas (solapamientos, redundancia, especulación, complejidad)

---

## Contribuciones

Si encuentras casos donde YAGNI Auditor se equivoca, abre un issue con:
1. Archivo auditado (o descripción)
2. Reporte YAGNI generado
3. Por qué crees que la recomendación es incorrecta

---

## Licencia

MIT. Verifica `LICENSE` para términos legales completos.

---

**Última actualización:** 2026-06-27
