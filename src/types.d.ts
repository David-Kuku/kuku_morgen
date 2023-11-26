export interface IPricingCard {
    name: string,
    priceMonthly: string
    priceYearly: string
    cta: string
    features: string[][]
}

export interface ICode {
    '0': string
    '1': string
    '2': string
    '3': string
    '4': string
    '5': string
}

type BarChartData = {
    date: string;
    value: number;
  };