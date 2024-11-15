export function defined(arg: unknown): arg is object {
    return arg !== undefined;
  }


export function formatPrice(x: number): string {
  // adds spaces into numbers e.g. 11122233 => 11 122 233
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}