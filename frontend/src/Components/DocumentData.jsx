function DocumentData(props) {
    return <div className="w-[50%] h-96">
        <embed className="w-[45%] h-96" src={props.file} />
        <h1 className="text-4xl font-semibold ">{props.title}</h1>
    </div>
}

export default DocumentData