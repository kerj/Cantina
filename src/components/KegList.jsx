import React from 'react'
import placeholder from '../img/placeholder.png';
import Keg from './Keg';
const masterKegList = [
    {
        drinkType: 'Alcoholic',
        drinks: [
            'Jawa Juice',
            'Naboo Bug Juice',
            'Tatooine Bug Juice',
            'Juri Juice'
        ],
        image: [
            placeholder
        ]
    },
    {
        drinkType: 'Non-Alcohiolic',
        drinks: [
            'Zoochberry Juice',
            'Spacer Juice',
            'Jaffa Cider'
        ],
        image: [
            placeholder
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
