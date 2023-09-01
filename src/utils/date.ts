export function formatCurrencyBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}