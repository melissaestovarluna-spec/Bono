/**
 * Apps Script para guardar registros en la hoja "Bono".
 * 1) Crear proyecto en Apps Script
 * 2) Pegar este archivo
 * 3) Deploy > Web app (acceso: Anyone)
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName('Bono');
    if (!sh) throw new Error('No existe la hoja "Bono"');

    var payload = JSON.parse(e.postData.contents || '{}');

    var row = [
      payload.nombre || '',       // A Nombre
      payload.fecha || '',        // B Fecha
      payload.estado || '',       // C Estado
      payload.ciudad || '',       // D Ciudad
      payload.curp || '',         // E Curp
      payload.numeroCel || '',    // F NumeroCel
      payload.tarjeta || '',      // G Tarjeta (recomendado: solo últimos 4)
      payload.fechaRegistro || '',// H Fecha
      payload.exp || '',          // I Exp
      payload.codigoPost || '',   // J CodigoPost
      payload.correo || ''        // K Correo
    ];

    sh.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
