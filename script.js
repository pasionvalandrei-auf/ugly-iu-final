// Example script: intentionally missing semicolon to trigger ESLint "semi" rule
console.log('Script loaded') // <-- missing semicolon on purpose to test lint step

// small helper to show a message in console
function showNote() {
  console.log('This site has an automated JS linter in CI.')
}
showNote();
