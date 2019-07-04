import React from 'react'
import placeholder from '../img/placeholder.png';
import Keg from './Keg';
const masterKegList = [
    {
        drinkType: 'Alcoholic',
        drinks: [
            {
                name: 'Jawa Juice',
                brand: 'Star Brew',
                price: '7',
                alcoCon: '5.5%',
                remaining: 124,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Naboo Bug Juice',
                brand: 'Star Brew',
                price: '3',
                alcoCon: '5.5%',
                remaining: 124,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Tatooine Bug Juice',
                brand: 'Star Brew',
                price: '2',
                alcoCon: '5.5%',
                remaining: 124,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Juri Juice',
                brand: 'Star Brew',
                price: '5',
                alcoCon: '5.5%',
                remaining: 124,
                image: [
                    placeholder
                ]
            }
        ],
    },
    {
        drinkType: 'Non-Alcoholic',
        drinks: [
            {
                name: 'Zoochberry Juice',
                brand: 'Star Brew',
                price: '3',
                remaining: 124,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Spacer Juice',
                brand: 'Star Brew',
                price: '5',
                remaining: 124,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Jaffa Cider',
                brand: 'Star Brew',
                price: '8',
                remaining: 124,
                image: [
                    placeholder
                ]
            }
        ]
    }
      

]

export default function KegList() {
    return (
        <div>
            {masterKegList.map((keg, index) =>
                <Keg
                drinkType={keg.drinkType}
                drinks={keg.drinks}
                image={keg.image}
                key={index}
                />
            )}
        </div>
    );
}
