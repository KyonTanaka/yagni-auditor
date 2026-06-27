# YAGNI Auditor v2.0 — Disclaimer Legal y Responsabilidad

## ⚠️ ADVERTENCIA IMPORTANTE

YAGNI Auditor es una herramienta de **análisis estático y recomendación**. No es un sistema automático de toma de decisiones.

---

## 1. Limitaciones de Responsabilidad

**YAGNI Auditor NO se hace responsable por:**

### A. Daños Derivados de Cambios Implementados
Si aplicas una recomendación de YAGNI sin revisar manualmente, y eso causa:
- Pérdida de datos o configuración
- Eliminación accidental de dependencias críticas
- Interrupciones de servicio en producción
- Pérdida económica o reputacional

**YAGNI no es responsable.** Tú aceptas el riesgo al aplicar cambios sin validación humana.

### B. Falsos Positivos o Negativos
YAGNI es análisis estático. Puede:
- Recomendar eliminar algo que parecía innecesario pero es crítico (falso positivo)
- No detectar un ciclo patológico si está codificado de forma no estándar (falso negativo)

**La herramienta no garantiza 100% de precisión.** Es una "segunda opinión", no una "verdad absoluta".

### C. Cambios en Ecosistemas Externos
Si un plugin que YAGNI auditó cambia su API o comportamiento después de la auditoría, YAGNI no puede prever eso.

---

## 2. Privacidad y Seguridad

### YAGNI Auditor es 100% Local
- ✅ Cero telemetría
- ✅ Cero llamadas a servidores (excepto GitHub API si es necesario)
- ✅ Cero recopilación de datos de usuarios
- ✅ Procesamiento 100% local, en tu máquina

### Lo que YAGNI NO hace
- ❌ No ejecuta código de terceros
- ❌ No instala dependencias durante auditoría
- ❌ No envía reportes a servidores externos
- ❌ No comparte tus auditorías con nadie

---

## 3. Protocolo de Uso SEGURO

**Obligatorio antes de aplicar cambios en producción:**

```
1. Lees reporte YAGNI
   ↓
2. Comprendes cada recomendación (no solo copias)
   ↓
3. Haces backup de configuración actual
   ↓
4. Aplicas CAMBIO PEQUEÑO (uno a la vez, no todos)
   ↓
5. Pruebas en staging/desarrollo primero
   ↓
6. Monitoreas comportamiento (tokens, latencia, errores)
   ↓
7. Si todo bien → aplica resto de cambios
   ↓
8. Si falla → rollback inmediato
```

**Nunca apliques múltiples recomendaciones YAGNI simultáneamente en producción.**

---

## 4. Casos Específicos de No-Responsabilidad

### Riesgo A: Eliminación de Dependencias Críticas
**Escenario:** YAGNI recomienda "elimina librería X (aparentemente redundante)". Lo haces. Resulta que X era crítica para Y que la llama en 3 lugares ocultos.

**Responsabilidad:** Tuya. YAGNI es análisis estático. No puede rastrear llamadas dinámicas en tiempo de ejecución.

**Protección:** Valida manualmente cada "eliminar" con:
```bash
grep -r "nombre-libreria" ./
git log --grep="nombre-libreria"
```

---

### Riesgo B: Falso Positivo en "Catálogo de Ruido"
**Escenario:** YAGNI marca sección "X" como "directorio telefónico innecesario". Lo eliminas. Resulta que era la única documentación que tenías.

**Responsabilidad:** Tuya. YAGNI no puede saber tu intención al escribir documentación.

**Protección:** Antes de eliminar secciones enteras, verifica que esté documentada en otra parte.

---

### Riesgo C: Cascada "Rota" que Era Intencional
**Escenario:** YAGNI detecta cascada feature-dev → code-review → pr-review-toolkit y recomienda romperla. Resulta que esa cascada ERA el flujo deseado.

**Responsabilidad:** Tuya. YAGNI asume "cascadas = ineficiencia". Puede ser falso en tu caso.

**Protección:** Entiende POR QUÉ YAGNI propone romper cascada. Si tiene sentido guardarla, ignora la recomendación.

---

## 5. Validación Previa Antes de Cada Auditoría

Antes de ejecutar `/yagni-audit`, asegúrate:

- [ ] Tienes backup del archivo que vas a auditar
- [ ] Entiendes qué estás auditando (no ejecutes ciegamente)
- [ ] Tienes poder de decisión (no delegues decisiones a YAGNI)
- [ ] Puedes revertir cambios si algo falla

---

## 6. Licencia y Términos Legales

YAGNI Auditor está bajo licencia **MIT**.

**Resumen MIT:**
- ✅ Puedes usar, copiar, modificar
- ✅ Puedes usarlo comercialmente
- ✅ Debes incluir copyright y licencia
- ❌ SIN GARANTÍAS (incluyendo garantía de "merchantability" o "fitness for a particular purpose")
- ❌ SIN RESPONSABILIDAD (incluyendo daños indirectos)

**Texto legal completo:** Ver `LICENSE`

---

## 7. Reportar Errores de YAGNI

Si encuentras caso donde YAGNI falla:

1. **Describe el escenario:** Archivo auditado, contexto, qué recomendó YAGNI
2. **Muestra el reporte:** Copia completa del output
3. **Explica el error:** Por qué crees que YAGNI se equivocó
4. **Ofrece datos:** Si puedes, proporciona:
   - Archivo auditado (o simulación)
   - Logs de ejecución
   - Sistema operativo y versión de Claude Code

**Importante:** Revisa si el archivo contiene datos sensibles antes de reportar.

---

## 8. Changelog de Seguridad

| Versión | Fecha | Cambios de Seguridad |
|---------|-------|----------------------|
| v2.0 | 2026-06-27 | Análisis estático puro, cero ejecución de código, cero telemetría verificado |
| v1.0 | anterior | 4 barreras básicas |

---

## 9. Contacto y Soporte

Para preguntas sobre seguridad, privacidad o responsabilidad legal:
- Abre un issue en GitHub con etiqueta `security`
- No reportes vulnerabilidades públicamente; usa responsible disclosure

---

## 10. Aceptación de Disclaimer

**Al usar YAGNI Auditor, aceptas:**

1. Que la herramienta es "tal cual" (AS IS), sin garantías
2. Que asumes responsabilidad completa por cambios que apliques
3. Que YAGNI es una "segunda opinión", no una decisión final
4. Que validarás manualmente cada recomendación antes de aplicar
5. Que no culparás a YAGNI si tu cambio rompe algo

---

**Última actualización:** 2026-06-27

**Versión:** Español (ES)  
**Versión Original:** [DISCLAIMER.md](DISCLAIMER.md) (Inglés)
