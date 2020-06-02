import React  from 'react';


function Test(props) {
   const {products} =props;
    return (
        <div>
            <ul>
                {products.map((item)=>{
                    return  <li key={item.id} >{item.title}</li>
                })}
            </ul>
        </div>
    );
}

export default Test;