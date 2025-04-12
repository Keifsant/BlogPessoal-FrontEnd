import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <div className="w-full bg-indigo-900 text-white
        flex justofy-center py-4">

            <div className="container flez justify-between text-lg">
                <Link to="/home"className="text-2x1 font-bold">Blog Pessoal</Link>

                <div className="flex gap-4">
                    Postagens
                    Temas 
                    Cadastrar Temas 
                    Perfil 
                    Sair 
                </div>
            </div>

        </div>
        </>
    )
}

export default Navbar;
