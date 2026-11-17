// DMI Vocabulary — settings. Edit this file only.
window.DMI_CONFIG = {
  // Paste the Google Apps Script Web App URL here to record marks in your Google Sheet.
  // (See apps-script/Code.gs and README.md.) Leave empty to run without recording.
  RESULTS_URL: "",

  BRANCHES: ["Jaffna", "Nelliady", "Chavakachcheri", "Chunnakam", "Kilinochchi", "Sandilipay"],

  // Each test covers 5 book pages.
  TESTS: [
    { id: 1, name: "Vocabulary Test 1", pages: [80, 81, 82, 83, 84] },
    { id: 2, name: "Vocabulary Test 2", pages: [85, 86, 87, 88, 89] },
    { id: 3, name: "Vocabulary Test 3", pages: [90, 91, 92, 93, 94] },
    { id: 4, name: "Vocabulary Test 4", pages: [95, 96, 97, 98, 99] }
  ],

  TEST_MINUTES: 40,
  HOTLINE: "0777 17 35 17"
};
