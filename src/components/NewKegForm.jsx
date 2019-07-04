import React from 'react'

export default function NewKegForm() {
    return (
        <div>
            <form>
                <label>Keg Name
                    <input type="text"/>
                </label><br/>
                <label>Keg Brand
                    <input type="text"/>
                </label><br/>
                <label>Keg Alcohol Content
                    <input type="text"/>
                </label><br/>
                <label>Keg Price
                    <input type="text"/>
                </label><br/>
            <button>Add Keg to Rotation</button>
            </form>
        </div>
    )
}
