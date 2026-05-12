function evaluateRisk(vulns, dependencies) {
  if (dependencies === 0) return 0;

  const ratio = vulns / dependencies;

  if (ratio === 0) return 'LOW';
  if (ratio < 0.2) return 'MEDIUM';
  return 'HIGH';
}

test('retorna 0 cuando no hay dependencias', () => {
  expect(evaluateRisk(5, 0)).toBe(0);
});

module.exports = { evaluateRisk };
