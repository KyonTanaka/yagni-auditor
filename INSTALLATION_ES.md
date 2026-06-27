# Guía de Instalación — YAGNI Auditor v2.0

## Requisitos

- ✅ Claude Code (versión 1.0+)
- ✅ Acceso a `~/.claude/skills/` (directorio)
- ✅ Permisos de lectura/escritura en directorio home

---

## Instalación por Sistema Operativo

### **macOS / Linux**

```bash
# 1. Clonar repositorio (opcional)
git clone https://github.com/KyonTanaka/yagni-auditor.git
cd yagni-auditor

# 2. Crear directorio de skills si no existe
mkdir -p ~/.claude/skills/

# 3. Copiar skill
cp yagni-audit.md ~/.claude/skills/

# 4. Verificar instalación
ls -la ~/.claude/skills/yagni-audit.md
```

**Salida esperada:**
```
-rw-r--r--  1 user  group  7562 Jun 27 12:23 yagni-audit.md
```

---

### **Windows (PowerShell)**

```powershell
# 1. Clonar repositorio (opcional)
git clone https://github.com/KyonTanaka/yagni-auditor.git
cd yagni-auditor

# 2. Crear directorio de skills si no existe
New-Item -ItemType Directory -Path "$env:USERPROFILE\.claude\skills" -Force | Out-Null

# 3. Copiar skill
Copy-Item -Path "yagni-audit.md" `
          -Destination "$env:USERPROFILE\.claude\skills\yagni-audit.md" -Force

# 4. Verificar instalación
Get-Item "$env:USERPROFILE\.claude\skills\yagni-audit.md"
```

**Salida esperada:**
```
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----      27/6/2026  12:23 p. m.           7562 yagni-audit.md
```

---

### **Windows (CMD)**

```cmd
# 1. Navegar al repositorio
cd yagni-auditor

# 2. Copiar skill
copy yagni-audit.md "%USERPROFILE%\.claude\skills\yagni-audit.md"

# 3. Verificar instalación
dir "%USERPROFILE%\.claude\skills\yagni-audit.md"
```

---

## Instalación desde URL (Sin clonar)

Si prefieres no clonar el repositorio completo:

### **macOS / Linux**
```bash
# Descargar directamente
curl -L https://raw.githubusercontent.com/KyonTanaka/yagni-auditor/main/yagni-audit.md \
  -o ~/.claude/skills/yagni-audit.md

# Verificar
cat ~/.claude/skills/yagni-audit.md | head -5
```

### **Windows (PowerShell)**
```powershell
# Descargar directamente
$url = "https://raw.githubusercontent.com/KyonTanaka/yagni-auditor/main/yagni-audit.md"
$dest = "$env:USERPROFILE\.claude\skills\yagni-audit.md"

Invoke-WebRequest -Uri $url -OutFile $dest

# Verificar
Get-Item $dest
```

---

## Verificar Instalación

### **Opción 1: Sistema de archivos**
```bash
# Verificar que el archivo existe
ls -la ~/.claude/skills/yagni-audit.md

# Verificar tamaño (debería ser ~7.5 KB)
du -h ~/.claude/skills/yagni-audit.md
```

### **Opción 2: Claude Code**
```
Usuario: "¿Qué skills tengo instalados que empiecen con 'yagni'?"
Claude: (debería listar yagni-audit)
```

### **Opción 3: Usar el skill**
En Claude Code, intenta usar `/yagni-audit`:

```
Usuario: "Audita este archivo: test.md"
Claude: "/yagni-audit test.md"
```

Si funciona, ¡la instalación fue exitosa! ✅

---

## Desinstalación

Si deseas remover el skill:

### **macOS / Linux**
```bash
rm ~/.claude/skills/yagni-audit.md
```

### **Windows (PowerShell)**
```powershell
Remove-Item "$env:USERPROFILE\.claude\skills\yagni-audit.md"
```

### **Windows (CMD)**
```cmd
del "%USERPROFILE%\.claude\skills\yagni-audit.md"
```

---

## Solución de Problemas

### **Problema: Skill no aparece en `/yagni-audit`**

**Causa:** La sesión de Claude Code comenzó antes de instalar el skill.

**Solución:** Reinicia Claude Code (cierra y abre de nuevo).

---

### **Problema: Error al copiar archivo**

**Síntoma:**
```
cp: permiso denegado: ~/.claude/skills/yagni-audit.md
```

**Solución:** Verifica permisos
```bash
# Ver permisos del directorio
ls -la ~/.claude/skills/

# Si es necesario, cambiar permisos
chmod 755 ~/.claude/skills/
```

---

### **Problema: Directorio `~/.claude/skills/` no existe**

**Solución:** Crear el directorio
```bash
# macOS / Linux
mkdir -p ~/.claude/skills/

# Windows (PowerShell)
New-Item -ItemType Directory -Path "$env:USERPROFILE\.claude\skills" -Force | Out-Null
```

---

### **Problema: Windows no reconoce `~` o `$env:USERPROFILE`**

**Solución:** Usa la ruta completa
```powershell
# En lugar de ~/.claude/skills/
# Usa:
C:\Users\TuNombre\.claude\skills\
```

---

## Verificación de Seguridad (Opcional)

Antes de usar el skill, puedes auditar su contenido:

```bash
# Ver primeras líneas del skill
head -20 ~/.claude/skills/yagni-audit.md

# Buscar patrones sospechosos
grep -E "fetch|eval|exec|subprocess" ~/.claude/skills/yagni-audit.md
# (No debería encontrar nada — YAGNI es análisis estático puro)
```

**Resultado esperado:** Sin coincidencias (significa que no ejecuta código).

---

## Próximos Pasos

1. **Lee el README** para entender cómo funciona
2. **Mira EXAMPLES** para casos de uso reales
3. **Usa `/yagni-audit`** en tu CLAUDE.md o configuraciones

```
Usuario: "Audita mi CLAUDE.md"
Claude: "/yagni-audit ~/.claude/CLAUDE.md"
```

---

## Soporte

Si tienes problemas:
- 📖 Lee [README_ES.md](README_ES.md) para entender más
- 📋 Revisa [DISCLAIMER_ES.md](DISCLAIMER_ES.md) para limitaciones
- 🔒 Consulta [SECURITY_AUDIT_ES.md](SECURITY_AUDIT_ES.md) para detalles de seguridad
- 🐛 Abre un [issue en GitHub](https://github.com/KyonTanaka/yagni-auditor/issues)

---

**Versión:** 2.0  
**Última actualización:** 2026-06-27  
**Estado:** ✅ Listo para Producción
