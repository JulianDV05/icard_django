import React, {useEffect} from "react"
import { HeaderPage } from "../../components/Admin";
import { useCategory} from "../../hooks";
export function CategoriesAdmin() {
    const { loading, categories, getCategories} = useCategory ()
    console.log(categories);

    useEffect(() => getCategories(), []);
    return (
        <>
            <HeaderPage title= "Categorias" btnTitle= "Nueva Categoria"/>
        </>
    )
}