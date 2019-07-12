import React from 'react'
import placeholder from '../img/placeholder.png';
import Keg from './Keg';
import PropTypes from 'prop-types';

var masterKegList = [
    {
        drinks: [
            {
                name: 'Jawa Juice',
                drinkType: 'alcoholic',
                brand: 'Star Brew',
                price: '7',
                alcoCon: '5.5%',
                remaining: 124,
                id: 1,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Naboo Bug Juice',
                drinkType: 'alcoholic',
                brand: 'Star Brew',
                price: '3',
                alcoCon: '5.5%',
                remaining: 124,
                id: 2,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Tatooine Bug Juice',
                drinkType: 'alcoholic',
                brand: 'Star Brew',
                price: '2',
                alcoCon: '5.5%',
                remaining: 124,
                id: 3,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Juri Juice',
                drinkType: 'alcoholic',
                brand: 'Star Brew',
                price: '5',
                alcoCon: '5.5%',
                remaining: 124,
                id: 4,
                image: [
                    placeholder
                ]
            },
            {
                name: 'Zoochberry Juice',
                drinkType: 'Non-Alcoholic',
                brand: 'Star Brew',
                price: '3',
                alcoCon: 'None',
                remaining: 124,
                id: 5,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Spacer Juice',
                drinkType: 'Non-Alcoholic',
                brand: 'Star Brew',
                price: '5',
                alcoCon: 'None',
                remaining: 124,
                id: 6,
                image: [
                    placeholder
                ]

            },
            {
                name: 'Jaffa Cider',
                drinkType: 'Non-Alcoholic',
                brand: 'Star Brew',
                price: '8',
                alcoCon: 'None',
                remaining: 124,
                id: 7,
                image: [
                    placeholder
                ]
            }
        ]
    }
      

]



export default function KegList(props) {
  
    return (
        <div>
            <h1>Regular Rotation</h1>
            {masterKegList.map((keg) => 
                <Keg
                drinkType={keg.drinkType}
                drinks={keg.drinks}
                image={keg.image}
                key={keg.id}
                />
            )}
        </div>
    );
}
