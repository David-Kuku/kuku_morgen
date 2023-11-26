import { IPricingCard } from "../../../../types"

export const Pricing_Cards: IPricingCard[] = [
    {
        cta: 'Get started',
        features: [
            ['24/7 Customer Support', 'has_feature'],
            ['Discounts', 'has_feature'],
            ['100% Coverage', 'does_not_have_feature'],
            ['Referral Bonus', 'does_not_have_feature']
        ],
        name: 'Standard Plan',
        priceMonthly: '99.99',
        priceYearly: '12,000'
    },
    {
        cta: 'Get started',
        features: [
            ['24/7 Customer Support', 'has_feature'],
            ['Discounts', 'has_feature'],
            ['100% Coverage', 'has_feature'],
            ['Referral Bonus', 'has_feature']
        ],
        name: 'Premium Plan',
        priceMonthly: '299.99',
        priceYearly: '20,000'
    }
]