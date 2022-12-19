export default function Navbar(props: { name: string, imagem: string }){
    return (
        <>
        <div className="flex flex-col items-center">
            <div>
                <img src={props.imagem} className="rounded h-1"/>
            </div>
            <div>
                <strong>{props.name}</strong>
            </div>
        </div>
        </>
    )
}