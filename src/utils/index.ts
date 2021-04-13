function calculateImc(peso: number, alt: number): string {
  const result = peso / (alt * alt);

  if (result < 24) {
    return 'Abaixo do peso';
  }
  if (result >= 24 && result <= 26) {
    return 'Peso Ideal';
  }
  return 'Acima do peso';
}

interface Props {
  total: number;
  totalGast: number;
}

function calculateCalories(calories: number, passos: number): Props {
  const totalCalories = 3 * calories;
  const totalGs = 0.08 * passos;

  return {
    total: totalCalories,
    totalGast: totalGs,
  };
}

export { calculateImc, calculateCalories };
