/**
 * DMI Vocabulary Test — marks recorder.
 *
 * SETUP (one time, about 3 minutes):
 * 1. Create a new Google Sheet (e.g. "DMI Vocabulary Test Marks").
 * 2. Extensions → Apps Script. Delete what is there and paste this whole file. Save.
 * 3. Deploy → New deployment → type "Web app".
 *      Execute as: Me      Who has access: Anyone
 *    Click Deploy, allow access, and copy the Web app URL (ends with /exec).
 * 4. On GitHub open assets/config.js and paste the URL into RESULTS_URL: "…". Commit.
 *
 * Every submitted test then adds one row to the "Results" tab.
 */
var HEAD = ['Time', 'Test', 'Pages', 'Name', 'Reg No', 'Branch', 'Marks /100', 'Grade',
            'A Tamil meaning /30', 'B English word /20', 'C Verb forms /30', 'D Sentences /20',
            'Answered /50', 'Minutes', 'Auto-submitted', 'Wrong words'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName('Results') || ss.insertSheet('Results');
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEAD);
      sh.getRange(1, 1, 1, HEAD.length).setFontWeight('bold').setBackground('#ffe600');
      sh.setFrozenRows(1);
    }
    sh.appendRow([new Date(), clean(d.test), clean(d.pages), clean(d.name), clean(d.reg), clean(d.branch),
                  Number(d.marks) || 0, clean(d.grade), Number(d.a) || 0, Number(d.b) || 0, Number(d.c) || 0, Number(d.d) || 0,
                  Number(d.answered) || 0, Number(d.minutes) || 0, clean(d.auto), clean(d.wrong)]);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  } finally {
    lock.releaseLock();
  }
}

// Stops text typed by a student from being treated as a spreadsheet formula.
function clean(v) {
  v = String(v == null ? '' : v).slice(0, 2000);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function doGet() {
  return ContentService.createTextOutput('DMI Vocabulary Test recorder is running.');
}
