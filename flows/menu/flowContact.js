const { addKeyword } = require('@bot-whatsapp/bot')

const flowContact = addKeyword(['5', 'contacto'])
    .addAnswer([
        '📞 *Información de Contacto*\n',
        '*Coordinación de Prácticas Profesionales*\n',
        '👤 *Coordinador General:* Dr. Juan Pérez',
        '📧 Email: practicas@universidad.edu',
        '☎️ Teléfono: +57 1234567890',
        '📱 WhatsApp: +57 3001234567\n',
        '*Coordinadores por Facultad:*\n',
        '1. Facultad de Ingeniería:',
        '   • Ing. María Rodríguez',
        '   • ingenieria.practicas@universidad.edu\n',
        '2. Facultad de Administración:',
        '   • Dr. Carlos González',
        '   • admin.practicas@universidad.edu\n',
        '*Horarios de Atención:*',
        '• Lunes a Viernes: 8:00 AM - 5:00 PM',
        '• Sábados: 8:00 AM - 12:00 PM\n',
        '*Ubicación:*',
        '• Edificio Central, Piso 3, Oficina 304\n',
        '*Redes Sociales:*',
        '• Instagram: @practicasUNI',
        '• LinkedIn: /PracticasUniversidad\n',
        'Para volver al menú principal, escribe "menu"'
    ],
    { capture: true },
    async (ctx, { gotoFlow }) => {
        if (ctx.body.toLowerCase() === 'menu') {
            const flowMain = require('../menu/flowMain')
            return gotoFlow(flowMain)
        }
    })

module.exports = flowContact