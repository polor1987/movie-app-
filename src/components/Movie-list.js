import React from 'react';
import Card from './Movie-card'

const List = ({films}) =>{
    console.log()
    return <div className="list">
        {films.sort((a,b)=> (a.name > b.name) ? 1 :((a.name < b.name) ? -1 : 0)).sort((a,b)=>b.rate - a.rate).map((elem,index) => <Card key={index} name={elem.name} img={elem.img} rate={elem.rate}/>)}
    </div>
}

export default List