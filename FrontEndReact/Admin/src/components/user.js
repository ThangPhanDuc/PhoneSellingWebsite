

function User(props) {
    const {user,index} = props;
  
    return (
        <tr>
            <td>{index+1}</td>
            <td> 
                <img src="../images/img-user/img-user.png" className="w-25 h-25 rounded mx-auto d-block" />
            </td>
            <td>{user.fullName}</td>
            <td>{user.userName}</td>
            <td>{user.passWord}</td>
           

            <td>
                <button className="btn btn-success" >Xem</button>
            </td>
            <td>
                <button className="btn btn-danger" >Sửa</button>
            </td>
            <td>
                <button className="btn btn-warning">Xóa</button>
            </td>
        </tr>
    )
}


export default (User);