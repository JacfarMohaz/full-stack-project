function StudentData(props) {
    return <tbody>
        <tr>
            <td className="text-xl text-center border-b-2 border-l-2 py-2 border-black">{props.fullName}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-2 border-black">{props.address}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-2 border-black">{props.gender}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-2 border-black">{props.class}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-2 border-black">{props.phone}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-2 border-black">{props.data}</td>
            <td className="text-xl px-5 border-b-2 border-l-2 border-r-2 py-2 border-black">
                <div>
                    <i class="fa-solid fa-pen-to-square text-green-500 text-3xl"></i>
                    <i onClick={props.remove} className="fa-solid fa-trash text-red-500 ml-5 text-3xl"></i>
                </div>
            </td>
        </tr>
    </tbody>
}

export default StudentData