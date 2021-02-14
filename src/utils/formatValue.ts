export function formatValue(value:number) {
    const parsed = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return parsed;
}