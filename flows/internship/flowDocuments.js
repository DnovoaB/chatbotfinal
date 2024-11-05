// flows/internship/flowDocuments.js
const { addKeyword } = require('@bot-whatsapp/bot')
const keywords = require('../../data/words');

const flowDocuments = addKeyword(keywords.documentos)
    .addAnswer([
        '*📄 Documentos y Formatos Requeridos*',
        '',
        '*Documentos Obligatorios:*',
        '1. Hoja de vida institucional',
        '2. Carta de presentación',
        '3. Formato de inscripción',
        '4. Acuerdo de prácticas',
        '',
        '*Documentos Adicionales:*',
        '5. Certificado de ARL',
        '6. Convenio empresa-universidad',
        '',
        '¿Qué documento necesitas consultar?',
        'Escribe el número correspondiente.'
    ])
    .addAnswer(
        ['Esperando tu selección...'],
        { capture: true },
        async (ctx, { flowDynamic, gotoFlow }) => {
            const option = ctx.body.trim()
            
            switch (option) {
                case '1':
                    return flowDynamic([
                        '*📝 Hoja de Vida Institucional*',
                        '',
                        '*Instrucciones:*',
                        '1. Descarga el formato desde:',
                        '   portal.universidad.edu/formatos',
                        '',
                        '*Secciones obligatorias:*',
                        '• Datos personales',
                        '• Formación académica',
                        '• Experiencia relevante',
                        '• Referencias',
                        '',
                        '*Importante:*',
                        '• Usar foto formal',
                        '• Máximo 2 páginas',
                        '• Formato PDF'
                    ])
                case '2':
                    return flowDynamic([
                        '*📋 Carta de Presentación*',
                        '',
                        '*Contenido requerido:*',
                        '• Datos del estudiante',
                        '• Programa académico',
                        '• Semestre actual',
                        '• Área de interés',
                        '',
                        '*Formato:*',
                        '• Membrete institucional',
                        '• Firma del coordinador',
                        '• Fecha actualizada'
                    ])
                case '3':
                    return flowDynamic([
                        '*📌 Formato de Inscripción*',
                        '',
                        '*Secciones:*',
                        '• Información personal',
                        '• Datos académicos',
                        '• Preferencias de práctica',
                        '',
                        '*Requisitos:*',
                        '• Firma del estudiante',
                        '• Firma del acudiente',
                        '• Aprobación académica'
                    ])
                case '4':
                    return flowDynamic([
                        '*📜 Acuerdo de Prácticas*',
                        '',
                        '*Incluye:*',
                        '• Compromisos del estudiante',
                        '• Normativa institucional',
                        '• Derechos y deberes',
                        '',
                        '*Importante:*',
                        '• Leer completamente',
                        '• Firmar todas las páginas',
                        '• Entregar original y copia'
                    ])
                case '5':
                    return flowDynamic([
                        '*🏥 Certificado de ARL*',
                        '',
                        '*Proceso:*',
                        '1. Solicitar en coordinación',
                        '2. Pagar en tesorería',
                        '3. Esperar 24h hábiles',
                        '',
                        '*Vigencia:*',
                        '• Durante toda la práctica',
                        '• Renovación semestral'
                    ])
                case '6':
                    return flowDynamic([
                        '*🤝 Convenio Empresa-Universidad*',
                        '',
                        '*Proceso de gestión:*',
                        '1. Solicitud de la empresa',
                        '2. Revisión jurídica',
                        '3. Firmas autorizadas',
                        '',
                        '*Tiempo estimado:*',
                        '• 15 días hábiles',
                        '',
                        '*Nota:* Este documento lo gestiona',
                        'directamente la universidad'
                    ])
                default:
                    return flowDynamic([
                        '❌ Opción no válida.',
                        'Por favor, elige un número del 1 al 6.',
                        '',
                        'Escribe *menu* para volver al inicio.'
                    ])
            }
        }
    )

module.exports = flowDocuments