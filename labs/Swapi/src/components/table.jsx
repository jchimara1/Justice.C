const Table =({data}) => {

    const {name, height, hair_color, eye_color, gender, skin_color} = data

    return(
        <>
           <tbody>
                    <tr>
                        <td>{name} </td>
                        <td>{height} </td>
                        <td>{hair_color} </td>
                        <td>{eye_color} </td>
                        <td>{gender} </td>
                        <td>{skin_color} </td>
                    </tr>
           </tbody>


        </>

    )
}


export default Table;